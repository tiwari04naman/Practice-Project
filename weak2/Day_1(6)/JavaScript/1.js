//console.log("Hello World"); //Output
//To take Input
// const prompt = require("prompt-sync")();
// var name = prompt("Enter your Name");
// console.log("Welcome to js", name);
// let a = 10;
// const b;// alwals value initialize
// a = a + 2;
// b = 10;
// in this case initialization is resolved
// let a = 10;
// const b = 10;
// a = a + 2;
// console.log(a);
// console.log(b);

//Operator-----alwals provide boolean value in java script
// let st1 = "abesit";
// let st2 = "aktu";
// console.log(st1 +"  " +st2);

// let st1 = "amit";
// let st2 = "aman";
// console.log(st1 > st2);
// let st1 = "amit";
// let st2 = "aman";
// console.log(st1 == st2);

// let st1 = "naman";
// let st2 = "naman";
// console.log(st1 == st2);

//logical operator
// let st1 = "amit";
// let st2 = "aman";
// console.log(st1 && st2);

//ternary operator-----> to take decision

//type operator---->gives us the data type
// let st1 = "amit";
// let a = 10;
// let b = 23.5;

// console.log(typeof st1 + " " + typeof a + " " + typeof b);
// let a;
// console.log(a);

//Expression
// let a = 10;
// let b = "Rohit";
// console.log(a + b);

// let a = 10 + 7;
// let b = "Rohit";
// console.log(a + b);

//Function basics

// function add(a, b) {
//   console.log a + b;
// }
// console.log(add(10, 20));
//This is also called traditional function
function add(a, b) {
  console.log(a + b);
}
console.log(add("abes", "it"));

//Function Expression-----.ananomous function without name------.> Anamonous function is nothing but a lemda function but in this case no allowed single line
//a function without name------>Function Expression
// const x = function (a, b) {
//   console.log a + b;
// };
// console.log(x(2, 4));

// Self Invoking Function

//Write a arrow function
const x = (a, b) => {
  console.log(a + b);
};
console.log(x(2, 5));

//Write a arrow function to calculate simple interest
// const si = (p, r, t) => {
//   console.log (p * r * t) / 100;
// };
// console.log(si(2, 4, 6));
//fuction does not return multiple value

// that takes two number parameter and print additon Sub multi div and exponennt
const y = (a, b) => {
  console.log(a + b);
  console.log(a - b);
  console.log(a * b);
  console.log(a / b);
  console.log(a ^ b);
};
y(10, 2);

//Write a function expression which return which takes name as a parameter and return a message
const z = function (name) {
  return "Good Afternoon " + name;
};
console.log(z("Naman"));

//How to pass function as a parameter
const m = function () {
  return "Good Morning";
}
const l = function () {
  return "Good Evening";
}
function abc(ml, name) {
  console.log(ml() + " " + name);
}
abc(m, "Naman");
