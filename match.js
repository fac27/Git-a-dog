// Get github user using fetch

function getUser(name){
    fetch(`https://api.github.com/users/${name}`)
    return fetch(`https://api.github.com/users/${name}`)
    .then ((response) => response.json()) // access the response using json() method
  }

  getUser("eliazzo")
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



  

 