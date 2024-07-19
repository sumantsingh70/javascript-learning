// (differentiated upon access)
//  Primitive (1st type)
//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);
// const bigNumber = 3456543576654356754n

// ********************************2nd type***********************

// Reference (Non primitive)(2nd type)
// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"]; //array
let myObj = {
    name: "hitesh",
    age: 22,
}//object

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof score);
console.log(typeof scoreValue);
console.log(typeof isLoggedIn);
console.log(typeof outsideTemp);
console.log(typeof id);
console.log(typeof anotherId);
console.log(typeof myFunction);

//refer this:
// https://262.ecma-international.org/5.1/#sec-11.4.3

//JavaScript is dynamically typed language