const name = "Sumant"
const repoCount = 20

// console.log(name + repoCount + " Value");

//better way
console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);


const gameName = new String('sumant-hc-com') //new leads for object

// console.log(gameName[0]);
// console.log(gameName.__proto__);            //{}


// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(2));
// console.log(gameName.indexOf('t'));


const newString = gameName.substring(0, 4)    //4 character starting from 0th
console.log(newString);

const anotherString = gameName.slice(-8, 4)
console.log(anotherString);

const newStringOne = "   sumant    "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://sumant.com/sumant%20singh"

console.log(url.replace('%20', '-'))

console.log(url.includes('sundar'))

console.log(gameName.split('-'));