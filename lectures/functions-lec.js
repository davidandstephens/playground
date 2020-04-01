"use strict";

// Functions allow us to write logic that we can reuse throughout our applications!

// To write a function consider the following function...

function nameOfFunction (parameter) {
    var something = "Something";
    return something;
}

// When we call a function, consider the following function call...

var argument = 88;
// console.log(nameOfFunction(argument));

// Couple vocabulary words to keep in mind:
    // Parameter - The variable used to define the incoming information in a function definition
    // Argument - The information being passed into a function call.

// We can also create functions that have multiple parameters!

function averageOfFive(n1, n2, n3, n4, n5) {
    return (n1 + n2 + n3 + n4 + n5) / 5;
}

console.log(averageOfFive(34, 17, 22, 19, 13));

// Something to keep in mind with return statements...

// function helloWorld() {
//     return "Hello, World!";
//     console.log("What a beautiful world it is!");
//     return "Goodbye, World!"
// }

// console.log(helloWorld());

// What do we expect to see in the console?

// function helloYou(name) {
//     console.log("Hello, " + name + "!")
// }
//
// var helloJim = helloWorld("Jim");
//
// console.log(helloJim);

// What about here?

// Something nice about functions is that you can set a variable equal to the return of a function!

var isSevenANumber = !isNaN(7);

// console.log("Seven is a number: " + isSevenANumber);

// Let's take a moment to talk about function scope. Consider what would happen if I did the following.

// console.log(something);

// What do we see?

// An error, that's what we see. That is because the variable something is scoped to our first function, and not in the global scope.

// Consider the following example...

var x = 300;
var y = 100;

function scopeExample() {
    var x = 1;
    var y = 2;
    console.log('x: ' + x + ' y: ' + y); // x: ?? y: ??
    return x + y;
}

// console.log('x: ' + x + ' y: ' + y); // x: ?? y: ??
// var returnValue = scopeExample();
// console.log(returnValue); // ??
// console.log('x: ' + x + ' y: ' + y); // x: ?? y: ??

// We can protect our variable and functions from the global scope (i.e. users going into the console to call our functions) by use Immediately Invoked Function Expressions (IIFEs);

function somethingVeryImportant() {
    return "The user's SSN is: ***-**-****."
}

(function() {
    function somethingSuperImportant() {
        return "The user's credit card number is **** **** **** ****, with an expiration date of **/20**, and the CVV of ***."
    }
})();

// By placing our code inside of an IIFE it will shield our users from being able to call out functions in their console!