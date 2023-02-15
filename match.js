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


//gets github data from input
let userName = document.getElementById('user-name');
userName.addEventListener('keydown', (e) =>{
  if(e.key === "Enter"){
    e.preventDefault();
    let inputValue = userName.value;
    fetch(`https://api.github.com/users/${inputValue}`)
    .then((response) => response.json()) // access the response using json() method
    .then((user) => console.log(user))
    //trying to see if we can make a rule based on the first character
    .then(() => {
      let y = inputValue.split('', 1); 
      console.log(y)})
    .catch((error) => console.log(error))
 }
 })

 //get breeds list 
 fetch(`https://dog.ceo/api/breeds/list/all`)
    .then ((response) => response.json())
     // access the response using json() method
     .then(data => {
      for (let breed in data.message) { //each iteration of the loop gives us a breed key
        let keyVal = breed + ' ' + data.message[breed]; //concatenate the key and value using the + operator 
        console.log(keyVal)
      }
    })
    .catch(error => console.error(error));




    //const result = entries.map(entry => entry.join('-'));   
    //this needs to be fixed so it concats the keys and values in a loop
  


