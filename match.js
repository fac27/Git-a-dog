// Get github user using fetch

function getUser(name){
    fetch(`https://api.github.com/users/${name}`)
    return fetch(`https://api.github.com/users/${name}`)
    .then ((response) => response.json()) // access the response using json() method
  }

  getUser("eliazzo")
  .then((user) => console.log(user))
  .catch((error) => console.log(error))