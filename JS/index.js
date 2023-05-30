// function countdown() {
//     console.log(5);
//     console.log(4);
//     console.log(3);
//     console.log(2);
//     console.log(1);
// }
//
// countdown();
// GO!
// countdown();

// function logNumber() {
//     let myNumber = 42;
//     console.log(myNumber);
// }
//
// logNumber();

// let lapOne= 34;
// let lapTwo = 33;
// let lapThree = 36;
// function lapSum() {
//     let totalLapTime = lapOne + lapTwo + lapThree;
//     console.log(totalLapTime);
// }
//
// lapSum();

// let lapsCompleted = 0;
//
// function incrementLaps() {
//     lapsCompleted = lapsCompleted + 1;
// }
// incrementLaps();
// incrementLaps();
// incrementLaps();
// console.log(lapsCompleted);

// let username = "per";
// let message = "You have three new notifications";
// let messageToUser = message + ", " + username + "!";
// console.log(messageToUser);

// let name = "Amantur";
// let greeting = "Hi, my name is";
// let myGreeting = greeting + " " + name;
// console.log(myGreeting);

let welcomeEl= document.getElementById("welcome-el");
let name = "Amantur";
let greeting = "Welcome back, ";
welcomeEl.innerText = greeting + name + "!";