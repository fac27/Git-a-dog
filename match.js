// Access dog image API
     function getDog(breed){
      return fetch(`https://dog.ceo/api/breed/${breed}/images/random`)
      .then((response) => response.json())
    }

// Access github data from user input
let userName = document.getElementById('user-name');
userName.addEventListener('keydown', (e) =>{
  if(e.key === "Enter"){
    e.preventDefault();
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
        const breedOutput = document.getElementById("breed-output")
        breedOutput.append(dogResult)

        console.log(`Here's a random dog breed starting with '${inputValue}': ${randomBreed}.`);

// Access the corresponding image of the dog
      getDog(`${randomBreed}`)
      .then((randomDog) => {
        const dogImage = document.createElement("img")
        dogImage.src = randomDog.message
        const imgOutput = document.getElementById("img-output")
        imgOutput.append(dogImage)
      })
      .catch((error) => console.log(error))
      }   
    })
    .catch((error) => console.log(error))  
  }
 })


// Create username according to selected dog breed 

fetch(`https://dog.ceo/api/breeds/list/all`)
  .then((response) => response.json())
  .then((data) => {
    let fullBreedList = [];
    for (let breed in data.message) {
      let subBreed = data.message[breed];
      if (subBreed.length > 0) {
        subBreed.forEach((sub) => {
          fullBreedList .push(breed + '-' + sub);
        });
      } else {
        fullBreedList .push(breed);
      }
    }
    let dropdown = document.getElementById("breedList")
    fullBreedList.forEach((breed) => {
      let newOption = document.createElement("option")
        dropdown.appendChild(newOption)
        newOption.innerText = breed
    })

    dropdown.addEventListener('change',()=>{
      let value = dropdown.options[dropdown.selectedIndex].text;
      
      const randomString = Math.random().toString(36).slice(2);
      let newName = value + '-' + randomString;
      console.log(newName);
      

      // Check random username does not already exist
      fetch(`https://api.github.com/users/${newName}`)
      .then((response) => {
      if (!response.ok){
        const newUserDisplay = document.createElement('p');
        newUserDisplay.innerText = newName;
        const outputNewUser = document.getElementById("new-user")
        outputNewUser.append(newUserDisplay)
      }
      return response.json();
    })
      .then((user) => { 
        console.log(user)
        // Repeat random username generator function
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
