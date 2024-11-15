let numberVar = 42;

let booleanVar = true;

let undefinedVar = undefined;


console.log("String:", stringVar);

console.log("Number:", numberVar);

console.log("Boolean:", booleanVar);

console.log("Undefined:", undefinedVar);

var rollNum = 0;

let rollNum = 15;

if (rollNum > 10) {
    console.log("The RollNumber greater than 10");
}
let rollNum = 15;

if (rollNum > 10) {

    console.log("The RollNumber greater than 10");
}
let isMember = true;

if (isMember) {
    console.log("Member discount applied.");
}

let startValue = 50;

if (startValue > 0) {
    console.log("The value is positive.");
} 


else if (startValue < 0) {
    console.log("The value is negative.");
} 


else {
    console.log("The value is zero.");
}
let a = 10;
let b = 20;

console.log(a == b);  // false


console.log(a === b); // false

console.log(a != b);  // true


console.log(a > b);   // false

console.log(a < b);   // true

console.log(a >= b);  // false


console.log(a <= b);  // true

let firstName = "Juan";
let lastName = "Corbo";
let age = 18;
console.log("Hello, " + firstName + " " + lastName + ", you are " + age + " years old.");


let num = 50;
if (num > 0 && num < 100) {
    console.log("The number is within range.");
}


let hasCar = true;

let hasLicense = true;

let hasInsurance = true;

if (hasCar && hasLicense && hasInsurance) {
    console.log("You can drive legally.");
} else {
    console.log("Check your driving eligibility.");
}


let numB = 21;
if (numB % 2 === 0) {
    console.log("The number is even.");
} else {
    console.log("The number is odd.");
}


let score = 85;
if (score >= 90) {
    console.log("Grade A.");
} else if (score >= 80 && score < 90) {
    console.log("Grade B.");
} else {
    console.log("Grade C.");
}