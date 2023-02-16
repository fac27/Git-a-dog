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
        const output = document.querySelector("output")
        output.append(dogResult)

        console.log(`Here's a random dog breed starting with '${inputValue}': ${randomBreed}.`);

// Access the corresponding image of the dog
    
      getDog(`${randomBreed}`)
      .then((randomDog) => {
        const dogImage = document.createElement("img")
        dogImage.src = randomDog.message
        const output = document.querySelector("output")
        output.append(dogImage)
      })
      .catch((error) => console.log(error))
      }   
    })
    .catch((error) => console.log(error))  
  }
 })



// // Get breeds list 
//  fetch(`https://dog.ceo/api/breeds/list/all`)
//     .then ((response) => response.json()) // Access the response using json() method
//      .then(data => {
//       for (let breed in data.message) { // Each iteration of the loop returns a breed key pair
//         let keyVal = breed + ' ' + data.message[breed]; // Concatenates the key and value using the + operator 
//         console.log(keyVal)
//       }
//     })
//     .catch(error => console.error(error));



// Get breeds list 
//  fetch(`https://dog.ceo/api/breeds/list/all`)
//     .then ((response) => response.json()) // Access the response using json() method
//      .then(data => {
//       for (let breed in data.message) { // Each iteration of the loop returns a breed key pair
//         let keyVal = breed + ' ' + data.message[breed]; // Concatenates the key and value using the + operator 
//         console.log(keyVal)
//       }
//     })
//     .catch(error => console.error(error));




fetch(`https://dog.ceo/api/breeds/list/all`)
  .then((response) => response.json())
  .then((data) => {
    const fullBreedList = [];
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
    fullBreedList.forEach((breed) => {
      let dropdown = document.getElementById("breedList")
      let newOption = document.createElement("option")
        dropdown.appendChild(newOption)
        newOption.innerText = breed
    })
  })
  

  .catch((error) => console.error(error));




  // Check random user does not already exist

  let randomUser = 'xghjsgfhgs' // output of random user generated function
  fetch(`https://api.github.com/users/${randomUser}`)
  .then((response) => {
  if (!response.ok){
    const newUserDisplay = document.createElement('p');
    newUserDisplay.innerText = randomUser;
    const output = document.querySelector("output")
    output.append(newUserDisplay)
  }
  return response.json();
})
  .then((user) => { 
    console.log(user)
    // repeat random username generator function
  })
  .catch((error) => console.error(error));

