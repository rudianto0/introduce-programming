// ===== Day 21: Introduction to variables =====

// console.log() prints a message to the browser console.
// To open the console: press F12, then choose the "Console" tab.
console.log("Hello from script.js!");

// --- let: a variable whose value CAN change later ---
let age = 20;
console.log("age:", age);
age = 21; // we are allowed to change it
console.log("age after change:", age);

// --- const: a variable whose value CANNOT be reassigned ---
const name = "Budi";
console.log("name:", name);
// name = "Ani"; // ERROR if uncommented: Assignment to constant variable

// --- var: the old way (before let/const). Avoid it in new code. ---
var oldStyle = "I am var";
console.log(oldStyle);
// var is function-scoped and can cause confusing bugs, so prefer let/const.

// --- Naming rules ---
// 1. Cannot start with a number.
// 2. No spaces. Use camelCase.
// 3. Cannot use reserved words like "let", "const", "function".
// 4. JavaScript is case-sensitive: age and Age are different variables.
let firstName = "Siti";
let myScore = 90;
console.log(firstName, myScore);

// --- Showing output on the page ---
// The HTML file has an element with id="output".
const output = document.getElementById("output");
output.textContent = "Hello " + name + "! You are " + age + " years old.";
