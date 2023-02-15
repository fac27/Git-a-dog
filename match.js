// Get github user using fetch

async function getUser(name){
    fetch(`https://api.github.com/users/${name}`)
    return fetch(`https://api.github.com/users/${name}`)
    .then ((response) => response.json()) // access the response using json() method
  }

// Display user name on page
  getUser("eliazzo")
  // .then((user) => console.log(user))
  .then((userData) => {
    const userName = document.createElement("h2")
    userName.innerText = userData.login
    const output = document.querySelector("output");
    output.append(userName)
  })
  .catch((error) => console.log(error))


  // Testing access to dog API

  async function getDog(breed){
    return fetch(`https://dog.ceo/api/breeds/image/random`)
    .then((response) => response.json())
  }

  getDog("akita")
    .then((dog) => console.log(dog))
    .catch((error) => console.log(error))
  
// Display dog image on page
    getDog("akita")
    .then((dogData) => {
      const dogImage = document.createElement("img")
      dogImage.src = dogData.message
      const output = document.querySelector("output")
      output.append(dogImage)
    })
    .catch((error) => console.log(error))


// Gets github data from input

let userName = document.getElementById('user-name');
userName.addEventListener('keydown', (e) =>{
  if(e.key === "Enter"){
    e.preventDefault();
    let inputValue = userName.value;
    fetch(`https://api.github.com/users/${inputValue}`)
    .then((response) => response.json()) // access the response using json() method
    .then((user) => console.log(user))

    //trying to see if we can make a rule based on the first character
    // .then(() => {
    //   let splitChar = inputValue.split('', 5); 
    //   console.log(splitChar)})

    // Access a dog breed according to the first character of the user input

    const breedList = `https://dog.ceo/api/breeds/list/all`
    fetch(breedList)
    .then ((response) => response.json())
    .then ((data) =>{
      let breeds = Object.keys(data.message);
      let inputValue = userName.value;
      let matchingBreeds = breeds.filter(breed => breed.startsWith(inputValue.charAt(0).toLowerCase()));
      if (matchingBreeds.length === 0) {
        console.log(`No dog breeds found starting with '${inputValue}'.`);
      } else {
        let randomBreed = matchingBreeds[Math.floor(Math.random() * matchingBreeds.length)];
        console.log(`Here's a random dog breed starting with '${inputValue}': ${randomBreed}.`);
      }   
    })
    .catch((error) => console.log(error))
 }
 })



      // Get breeds list 
 fetch(`https://dog.ceo/api/breeds/list/all`)
    .then ((response) => response.json()) // Access the response using json() method
     .then(data => {
      for (let breed in data.message) { // Each iteration of the loop returns a breed key pair
        let keyVal = breed + ' ' + data.message[breed]; // Concatenates the key and value using the + operator 
        console.log(keyVal)

      // Displays the list of dogs on the page

      // const displayDogName = document.createElement("p");
      // displayDogName.innerText = keyVal;
      // const output = document.querySelector("output");
      // output.append(displayDogName);
      }
    })
    .catch(error => console.error(error));




    //const result = entries.map(entry => entry.join('-'));   
    //this needs to be fixed so it concats the keys and values in a loop
  


