// Get github user using fetch

let userName = document.getElementById('user-name');

userName.addEventListener('keydown', (e) =>{
  if(e.key === "Enter"){
    e.preventDefault();
    let inputValue = userName.value;
    fetch(`https://api.github.com/users/${inputValue}`)
    return fetch(`https://api.github.com/users/${inputValue}`)
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



  

 