// Conditional statements....//

// if statement....

let age = 25;
if (age > 18) {
    console.log("you can vote")
}

let mode = "dark"; //light and dark use outut show
let color;

if (mode === "dark") {
    color = "black";
}
if (mode === "light") {
    color = "white";
}

console.log(color);

//if else statement....

if (mode === "dark") {
    color = "black";
} else {
    color = "white";
}
console.log(color);

//problem-1) marks of a student passed or not in a class 

let marks = 30;
if (marks >= 33) {
    console.log("you are pass");
} else {
    console.log("you are fail")
}

console.log(marks);

//problem-2) odd or even number

let num = 10;
if (num % 2 == 0) {
    console.log("Even number")
} else {
    console.log("odd number");
}

// syntax means rules..

//else-if statement.....//

let modes = "red";
let colors;

if (modes === "dark") {
    color = "black";
} else if (modes === "blue") {
    color = "blue";
} else if (modes === "pink") {
    color = "pink";
} else {
    color = "other";
}
console.log(color);

















