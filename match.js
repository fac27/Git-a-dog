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

  function getDog(breed){
    fetch(`https://dog.ceo/api/${breed}/image/random`)
    return fetch(`https://dog.ceo/api/${breed}/image/random`)
    .then((response) => response.json())
  }

  getDog("poodle-standard")
    .then((dog) => console.log(dog))
    .catch((error) => console.log(error))

    // This produces an error "blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource."

  

 