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

    // This produces an error "blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource."

  

 