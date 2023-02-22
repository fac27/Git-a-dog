## Project

The project this week was to build an app that queries at least two APIs and uses the results to update the DOM. 
We decided to use [Github's API](https://docs.github.com/en/rest?apiVersion=2022-11-28) and the [dog.ceo API](https://dog.ceo/dog-api/) so that we could match github usernames to images of dogs.


#### About the repo
- The purpose of this repo is to produce our app in collaboration and build on github skills.

##### Why 
- This repo stores the stages of our app development
- It provides access to the website for visitors
- It enables us to review eachothers work and merge asynchronous work


### User Story

As a user, I want to:
> Use my github data to find my perfect dog breed
> Create a github username according to a dog breed of my choice
> View the app on all of my devices


### Acceptance Criteria 

[x] Query at least two APIs using fetch
[x] Dynamic content generated with JS
[x] A clearly defined user journey, documented in your readme
[x] A responsive, mobile-first design
[x] Ensure your app is accessible to as many different users as possible

#### Wireframe
![wireframe](Images/Wireframe%20scrnshot.png)


### SPIKE

#### Debugging JavaScript
- The console.log() is a JavaScript debugging tool 
- There are four different ways of outputting a message:
> log
> info
> warn
> error
- Table()
> The table method displays an array or object as a table.
- Group()
- Time()
> Requires a method to start the timer and a method to end it. Once complete, it will output the total runtime in milliseconds.
- Remove sections of code and run elsewhere (e.g., CodeSandbox)
- The **debugger;** statement in JavaScript is a debugging tool that provides a way to pause the execution of JavaScript code at a specific line. 
- The DevTools Sources panel is where you debug JavaScript.
> It provides tools such as **Event Listener Breakpoints** and allows you to **step through code**

#### Debugging network requests
- The DevTools Network panel allows you to make sure that resources are being downloaded or uploaded as expected.
![DevTools scrnshot](Images/Inspect%20Network%20DevTools%20scrnshot.png)
- REST Clients - a tool which allows you to send HTTP requests to server and see the response
> **Insomnia** allows you to design debug and test your APIs.

#### Debugging HTML & CSS
- The DOM Tree of the Elements panel is where you carry out all DOM-related activities in DevTools.
> Inspect
> Edit
> Access
- Use device mode in DevTools to simulate a mobile view
> This is useful when designing using Mobile First
- Edit CSS with temporary borders and backgrounds
- Use the built in screen reader to test elements 

### Asynchronous JavaScript
- Reads from top to bottom (sequential handling)
- JavaScript uses promises to carry out different tasks before others have completed
> Promises are objects with a .then method that waits for the previous line of code to complete before running
- “Synchronous” vs “asynchronous” 
> Synchronous is less flexible. It requires all lines of code to be complete in order to work
- A **callback** in JavaScript is a function that is passed as an argument to another function and is executed after some kind of event or operation has completed. 


