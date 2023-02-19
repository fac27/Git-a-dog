// Access dog image API
     function getDog(breed){
      return fetch(`https://dog.ceo/api/breed/${breed}/images/random`)
      .then((response) => response.json())
    }

// Access github data from user input
let userName = document.getElementById('user-name');
const enterButton = document.getElementById('enter-button');
const breedOutput = document.getElementById("breed-output");
const imgOutput = document.getElementById("img-output");

enterButton.addEventListener('click', accessGit);

function accessGit(event){
    event.preventDefault(); // Prevent default page refresh
   
    // Clear previous results
    breedOutput.innerText = '';
    imgOutput.innerHTML = '';

    let inputValue = userName.value;
    fetch(`https://api.github.com/users/${inputValue}`)
    .then((response) => response.json()) // Access the response using json() method
    .then((user) => console.log(user))

// Access a dog breed according to the first character of the user input
    const breedList = `https://dog.ceo/api/breeds/list/all`
    fetch(breedList)
    .then ((response) => response.json())
    .then ((data) =>{
      let breeds = Object.keys(data.message);
      let inputValue = userName.value;
      let matchingBreeds = breeds.filter(breed => breed.startsWith(inputValue.charAt(0).toLowerCase()));
      if (matchingBreeds.length === 0) {
        console.log(`No dog breeds found starting with '${inputValue.charAt(0)}'.`);
      } else {
        let randomBreed = matchingBreeds[Math.floor(Math.random() * matchingBreeds.length)];
        const dogResult = document.createElement("p");
        dogResult.innerText = `${randomBreed}`;
        breedOutput.append(dogResult)
// Output text
        document.getElementById("breed-output").innerText = "Based on your github username " + inputValue + " you would be a " + randomBreed
        document.getElementById("breed-output").innerText = "Based on your github username {" + inputValue + "} you would be a " + randomBreed


// Access the corresponding image of the dog
      getDog(`${randomBreed}`)
      .then((randomDog) => {
        const dogImage = document.createElement("img")
        dogImage.src = randomDog.message
        imgOutput.append(dogImage)
      })
      .catch((error) => console.log(error))
      }   
    })
    .catch((error) => console.log(error))  
  }


// Create username according to selected dog breed 

fetch(`https://dog.ceo/api/breeds/list/all`)
  .then((response) => response.json())
  .then((data) => {
    let fullBreedList = Object.entries(data.message)
    .map(([breed,subBreeds]) =>{
      if (subBreeds.length > 0){
        return subBreeds.map((subBreed) => `${breed}-${subBreed}`);
      }
      return breed;
    })
    .flat();

    let dropdown = document.getElementById("breedList")
    fullBreedList.forEach((breed) => {
      let newOption = document.createElement("option")
        dropdown.appendChild(newOption)
        newOption.innerText = breed
    })

    dropdown.addEventListener('change',()=>{
      // Clear previous results
      const masterOutput = document.getElementById("master-img");
      masterOutput.innerHTML = '';

      const outputNewUser = document.getElementById("new-user");
      outputNewUser.innerHTML = '';

      let value = dropdown.options[dropdown.selectedIndex].text;
      const randomString = Math.random().toString(36).slice(2);
      let newName = value + '-' + randomString;

// Find dog image that corresponds to selected breed
      let masterBreed;

      if (value.includes('-')){
        masterBreed = value.split('-')[0];
        console.log(masterBreed);
        getDog(`${masterBreed}`)
        .then ((masterDog) => {
          const dogImage = document.createElement("img");
          dogImage.src = masterDog.message;
          masterOutput.append(dogImage)
        }
        )
      }
      else {
        masterBreed = value;
        console.log(masterBreed);
        getDog(`${masterBreed}`)
        .then ((masterDog) => {
          const dogImage = document.createElement("img");
          dogImage.src = masterDog.message;
          masterOutput.append(dogImage)
        }
        )
      }
 
      
// Check random username does not already exist
      fetch(`https://api.github.com/users/${newName}`)
      .then((response) => {
      if (!response.ok){
        const newUserDisplay = document.createElement('p');
        newUserDisplay.innerText = newName;
        outputNewUser.append(newUserDisplay)
      }
      return response.json();
    })
      .then((user) => { 
// If name already exists then repeat random username generator function
        const randomString = Math.random().toString(36).slice(2);
        let newName = value + '-' + randomString;    
      })
      .catch((error) => console.error(error));
        })
      })
  .catch((error) => console.error(error));



        
// Page text

const wonderText = document.getElementById("wonder-text");
wonderText.innerText = "Ever wondered what your github name *really* says about you?";

const nowText = document.getElementById("now-text");
nowText.innerText = "Now with Git-a-dog you can find out what sort of dog you would be based on your github name and profile";

const newUserText = document.getElementById("new-user-text");
newUserText.innerText = "Don't have a Github profile yet and need inspiration for a username?"

const chooseText = document.getElementById("choose-text");
chooseText.innerText = "Choose a dog breed to generate a new username";
