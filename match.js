// Access dog image API
function getDog(breed) {
  return fetch(`https://dog.ceo/api/breed/${breed}/images/random`).then(
    (response) => response.json()
  );
}

// Access github data from user input
let userName = document.getElementById("user-name");
const findBreedButton = document.getElementById("find-breed-enter-button");
const breedOutput = document.getElementById("breed-output");
const imgOutput = document.getElementById("img-output");

findBreedButton.addEventListener("click", accessGit);

function accessGit(event) {
  event.preventDefault(); // Prevent default page refresh

  // Clear previous results
  breedOutput.innerText = "";
  imgOutput.innerHTML = "";

  let inputValue = userName.value;
  fetch(`https://api.github.com/users/${inputValue}`)
    .then((response) => {
      if (response.status === 404) {
        throw new Error("User not found");
      }
      return response.json(); // Access the response using json() method
    })
    .then((user) => {
      // Access a dog breed according to the first character of the user input
      const breedList = `https://dog.ceo/api/breeds/list/all`;
      fetch(breedList)
        .then((response) => response.json())
        .then((data) => {
          let breeds = Object.keys(data.message);
          let inputValue = userName.value;
          let matchingBreeds = breeds.filter((breed) =>
            breed.startsWith(inputValue.charAt(0).toLowerCase())
          );
          if (matchingBreeds.length === 0) {
            throw new Error(
              `No dog breeds found starting with '${inputValue.charAt(0)}'.`
            );
          } else {
            let randomBreed =
              matchingBreeds[Math.floor(Math.random() * matchingBreeds.length)];
            const dogResult = document.createElement("p");
            dogResult.innerText = `${randomBreed}`;
            breedOutput.append(dogResult);

            // Output text
            document.getElementById("breed-output").innerText =
              "Based on your github username {" +
              inputValue +
              "} you would be a " +
              randomBreed;

            // Access the corresponding image of the dog
            getDog(`${randomBreed}`)
              .then((randomDog) => {
                const dogImage = document.createElement("img");
                dogImage.src = randomDog.message;
                imgOutput.append(dogImage);
              })
              .catch((error) => console.log(error));
          }
        })
        .catch((error) => {
          console.log(error);
          document.getElementById(
            "breed-output"
          ).innerText = `No dog breeds found starting with '${inputValue.charAt(
            0
          )}'.`;
        });
    })
    .catch((error) => {
      const errorImage = document.createElement("img");
      document.getElementById("breed-output").innerText =
        "Sorry, this user does not exit - you can get a git username below!";
      errorImage.src = "Images/this-is-dog.png";
      imgOutput.append(errorImage);
    }); //added error alert if username is not found
}

// Create dropdown list containing dog breed list

fetch(`https://dog.ceo/api/breeds/list/all`)
  .then((response) => response.json())
  .then((data) => {
    let fullBreedList = Object.entries(data.message)
      .map(([breed, subBreeds]) => {
        if (subBreeds.length > 0) {
          return subBreeds.map((subBreed) => `${breed}-${subBreed}`);
        }
        return breed;
      })
      .flat();

    let dropdown = document.getElementById("breedList");
    fullBreedList.forEach((breed) => {
      let newOption = document.createElement("option");
      dropdown.appendChild(newOption);
      newOption.innerText = breed;
    });

// Create username according to selected dog breed

    const genUserButton = document.getElementById("generate-user");
    genUserButton.addEventListener("click", (event) => {

      event.preventDefault(event);
      
      // Clear previous results
      const masterOutput = document.getElementById("master-img");
      masterOutput.innerHTML = "";

      const outputNewUser = document.getElementById("new-user");
      outputNewUser.innerHTML = "";

      // Create username combining first name input and selected breed
      let chosenBreed = dropdown.options[dropdown.selectedIndex].text;
      let firstName = document.getElementById("first-name").value;
      let newName = firstName + "-" + chosenBreed;

      

      // Find dog image that corresponds to selected breed
      let masterBreed;

      if (chosenBreed.includes("-")) {
        masterBreed = chosenBreed.split("-")[0];
        console.log("The master breed is " + masterBreed);
        getDog(`${masterBreed}`).then((masterDog) => {
          const dogImage = document.createElement("img");
          dogImage.src = masterDog.message;
          masterOutput.append(dogImage);
        });
      } else {
        masterBreed = chosenBreed;
        getDog(`${masterBreed}`).then((masterDog) => {
          const dogImage = document.createElement("img");
          dogImage.src = masterDog.message;
          masterOutput.append(dogImage);
        });
      }

      // Check new username does not already exist against github api
      fetch(`https://api.github.com/users/${newName}`)
        .then((response ) => {
          if (!response.ok && firstName !== '') {
            console.log("Yay! This user name does not exist.");
            const newUserDisplay = document.createElement("p");
            newUserDisplay.innerText = "Based on your first name {" + firstName + "} and your chosen breed {" + chosenBreed + "} your new github username is \n{" + newName + "}";
            outputNewUser.append(newUserDisplay);
          }
          // const dogImage = document.createElement("img");
          // dogImage.src = "Images/this-is-dog.png";
          // masterOutput.append(dogImage);
          else {
            outputNewUser.append("You have selected {" + chosenBreed + "}. \nPlease insert your first name so we can generate a new username");
          }
          return response.json();
        })
        .then((user) => {
          // If name already exists then repeat random username generator actions
          const randomString = Math.random().toString(36).slice(2);
          let firstName = document.getElementById("first-name").value;
          let newName = firstName + "-" + chosenBreed + randomString;
        })
        .catch((error) => console.error(error));
    });
  }).catch((error) => console.error(error));


// Page text

const wonderText = document.getElementById("wonder-text");
wonderText.innerText =
  "Ever wondered what your github name *really* says about you?";

const nowText = document.getElementById("now-text");
nowText.innerText =
  "Now with Git-a-dog you can find out what sort of dog you would be based on your github name and profile";

const newUserText = document.getElementById("new-user-text");
newUserText.innerText =
  "Don't have a Github profile yet and need inspiration for a username?";

const chooseText = document.getElementById("choose-text");
chooseText.innerText = "Insert your name and choose a dog breed from the list to generate a new github {username}";
