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
  // .then((user) => console.log(user))
  // .catch((error) => console.log(error))