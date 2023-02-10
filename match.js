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
  .then((user) => console.log(user))
  .catch((error) => console.log(error))


  // Test access to dog API

  function getDog(breed){
    fetch(`https://dog.ceo/api/${breed}/image/random`)
    return fetch(`https://dog.ceo/api/${breed}/image/random`)
    .then((response) => response.json())
  }

  getDog("poodle-standard")
    .then((dog) => console.log(dog))
    .catch((error) => console.log(error))

    // This produces an error "blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource."

  

 