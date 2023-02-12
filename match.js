// Get github user using fetch

let userName = document.getElementById('user-name');

userName.addEventListener('keydown', (e) =>{
  if(e.key === "Enter"){
    e.preventDefault();
    let inputValue = userName.value;
    fetch(`https://api.github.com/users/${inputValue}`)
    return fetch(`https://api.github.com/users/${inputValue}`)
<<<<<<< HEAD
    .then((response) => response.json()) // access the response using json() method
    .then(alert(`Enter Key is Pressed, ${inputValue}`))
    .then((user) => console.log(user))
    .then(() => {
      let y = inputValue.split('', 1); 
      console.log(y)})
    .catch((error) => console.log(error))
 }
 })

//  let y = inputValue.split(1);
//  console.log(y)


 
    fetch(`https://dog.ceo/api/breeds/list/all`)
    // return fetch(`https://dog.ceo/api/breeds/list/all`)
let userName = document.getElementById('user-name');

userName.addEventListener('keydown', (e) =>{
  if(e.key === "Enter"){
    e.preventDefault();
    let inputValue = userName.value;
    fetch(`https://api.github.com/users/${inputValue}`)
    return fetch(`https://api.github.com/users/${inputValue}`)
=======
<<<<<<< HEAD
>>>>>>> 09b34aa (fetching dogs and using split to get first char)
    .then ((response) => response.json()) // access the response using json() method
    .then((response) => 
          {let breeds = Object.keys(response.message)
          console.log(breeds)});
  
  // getUser(inputValue)
  // .then((user) => console.log(user))
  // .catch((error) => console.log(error))

// function getUser(name){
//     fetch(`https://api.github.com/users/${name}`)
//     return fetch(`https://api.github.com/users/${name}`)
//     .then ((response) => response.json()) // access the response using json() method
//   }

  // getUser(inputValue)
  // .then((user) => console.log(user))
  // .catch((error) => console.log(error))
  }

  getUser("eliazzo")
=======
    .then((response) => response.json()) // access the response using json() method
    .then(alert(`Enter Key is Pressed, ${inputValue}`))
    .then((user) => console.log(user))
    .then(() => {
      let y = inputValue.split('', 1); 
      console.log(y)})
    .catch((error) => console.log(error))
 }
 })

//  let y = inputValue.split(1);
//  console.log(y)


 
    fetch(`https://dog.ceo/api/breeds/list/all`)
    // return fetch(`https://dog.ceo/api/breeds/list/all`)
    .then ((response) => response.json()) // access the response using json() method
    .then((response) => 
          {let x = response.message
          console.log(x.buhund)});
  
  // getUser(inputValue)
  // .then((user) => console.log(user))
  // .catch((error) => console.log(error))

// function getUser(name){
//     fetch(`https://api.github.com/users/${name}`)
//     return fetch(`https://api.github.com/users/${name}`)
//     .then ((response) => response.json()) // access the response using json() method
//   }

  // getUser(inputValue)
>>>>>>> 1c59183 (fetching dogs and using split to get first char)
  // .then((user) => console.log(user))
  .then((userData) => {
    const heading = document.createElement("h2")
    heading.innerText = userData.login
    const output = document.querySelector("output");
    output.append(heading)
  })
  .catch((error) => console.log(error))


  // Test access to dog API

  function getDog(breed){
    fetch(`https://dog.ceo/api/breed/${breed}/images/random`)
    return fetch(`https://dog.ceo/api/breed/${breed}/images/random`)
    .then((response) => response.json())
  }

  getDog("Akita")
    // .then((dog) => console.log(dog))
    // .catch((error) => console.log(error))
    .then((dogData) => {
      const heading = document.createElement("h2")
      heading.innerHTML = dogData.status
      const output = document.querySelector("output");
      output.append(heading)
    })
    .catch((error) => console.log(error))




  getUser("eliazzo")
  .then((user) => console.log(user))
  .catch((error) => console.log(error))