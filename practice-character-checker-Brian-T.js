
const readline = require("readline-sync");
console.log("");

let userInput = readline.question("What is your name?: ");
let nameLength = userInput.length;
console.log("");

let indexFinder = userInput.length - 1;
let userIndexNumber = readline.questionInt("You name is " + nameLength + " characters long.\n\n" + 
    "Please Enter an Index Number From 0 - " + indexFinder + " to determine what character of your name is located at that index nunber: ");
console.log("");

console.log("The letter of your name at Index Number " + userIndexNumber + " is: " + (userInput[userIndexNumber]));
console.log("");


