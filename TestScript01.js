// This is a single-line comment

/*
   This is a
   multi-line comment
*/

// Variable declaration and assignment
var greeting = "Hello, ";
var name = "John";

// Concatenate strings
var message = greeting + name;

// Display message in the console
console.log(message);

// Conditional statement
if (name === "John") {
    console.log("You are John!");
} else {
    console.log("You are not John.");
}

// Function declaration
function sayHello(person) {
    var greeting = "Hello, ";
    console.log(greeting + person);
}

// Function call
sayHello("Alice");
sayHello("Bob");