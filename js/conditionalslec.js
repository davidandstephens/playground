// Conditionals: Code that runs when we meet certain requirements.

// Today we'll be covering if, if/else, if/else if/else statements, ternary operators and switch statements.

// IF STATEMENTS - Code that runs when a condition is met.

// if (condition) {
//     this code will run if our condition is true;
// }

// Consider the sentence: "When I run out of milk, I go to the store to get more."
// Condition: run out of milk
// Action: go get more

// if (outOfMilk === true) {
//     goToStore();
// }

// Example: I want to make a block of code that logs a message to the console when a variable is set to the number 5.

// var possiblyFive = prompt("Hey, type in 5");
// possiblyFive = parseInt(possiblyFive);
//
// if (possiblyFive === 5) {
//     console.log("Our condition is met!");
// }

// Some funky examples:

// if (true) {
//     console.log("Am I the one that will run?");
// }
//
// if (false) {
//     console.log("Or will it be me?");
// }

// if (5) {
//     console.log("What does this do?");
// }
//
// if (0) {
//    console.log("Will I run?");
// }

// We can also use our conditional logic in functions.

// Example: I want to build a function that returns a string when I pass a number as an argument.

// function isItANumber(parameter) {
//     if (typeof parameter === "number") {
//         return "That's a number!";
//     }
// }
//
// console.log(isItANumber(6));

// IF/ELSE Statements: Code that runs when a condition is met, but will also run with a default state.

// if (condition) {
//     i run when the condition evaluates to true;
// } else {
//     otherwise i run;
// }

// Consider the following sentence: "If I owned one, I'd get milk from my cow when I ran out. But since I don't, I'll go to the store instead."


// How would we write this as a if/else code block?



// Example: Let's expand our previous isItANumber function. Now I want to also return string when we aren't passed a number. How do I refactor our function?

// function isItANumber(parameter) {
//     if (typeof parameter === "number") {
//         return "That's a number!";
//     } else {
//         return "That's not a number!";
//     }
// }
//
// console.log(isItANumber(6));
//
// console.log(isItANumber("cow"));


// IF/ELSE IF/ELSE = A chain of if/else statements to give different results for different conditions.

// if (condition1) {
//     run this code;
// } else if (condition2) {
//     since the first condition wasn't met, and the second was, I run;
// } else {
//     since neither the first or second conditions were met, I run by default.
// }

// Consider the following sentence: "If I owned a cow, I'd get milk from it when I ran out. But since I don't, I could go to the store, but luckily, I own a goat, so I can get milk from it instead."

// How would we write this as a if/else if/else code block?



// Example: Let's make a function that takes in a number and will return three different strings for an argument lesser than, greater than, or equal to 35.

// function isThisThirtyFive(parameter) {
//    if (parameter === 35) {
//        return "It's thirty-five."
//    } else if (parameter > 35) {
//        return "It's greater than thirty-five."
//    } else if (parameter < 35) {
//        return "It's less than thirty-five."
//    } else {
//        return "Something is wrong."
//    }
// }
//
// console.log(isThisThirtyFive(35));

function addTwoNumbers (n1, n2) {
    if (!isNaN(n1)) {
        if (!isNaN(n2)){
            return n1 + n2;
        } else {
            return "Number 2 is not a number.";
        }
    } else {
        return "Number 1 is not a number.";
    }
}

// TERNARY OPERATOR: A operation to set a value based on boolean evaluation.

// var message = (booleanValue) ? "Operation was true." : "Operation was false.";

// Consider the following statement: "Are we out of milk? If we are: I'll head to the store, but if we do: I want to make a bowl of cereal."

// How would we write this as a ternary operator?

var doWeHaveMilk = false;
var action = (doWeHaveMilk) ? "I'll make some cereal" : "I'm gonna go to the store.";
console.log(action);

// Example: Let's look back at the if/else version of our isItANumber function. Let's refactor our if/else as a ternary operator.



// SWITCH STATEMENT: A statement with multiple conditions that will trigger based on the value of a variable.

// var color = prompt("What is your favorite color?");
//
// switch(color) {
//     case "green":
//         alert("What a coincidence, that's my favorite!");
//         break;
//     case "orange":
//         alert("That's my brother's favorite color!");
//         break;
//     default:
//         alert(color + " is a weird color, my dude.");
//         break;
// }

// Consider the following sentence: "I don't have a cow, goat, or camel. I guess I'll have to got to the store for milk."

// How would we write this as a switch statement?

// Example: Let's make a switch statement with a prompt for the user to input their favorite sandwich meat. If they like 'olive loaf' we should return an alert to congratulate them on their bold choice, and if they choose 'brisket' we should return a different alert: this one for congratulating them on the 'right' answer. All other responses should trigger an alert stating apathy.

// Let's work on the exercise!