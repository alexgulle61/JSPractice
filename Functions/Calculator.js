/*
Let’s create a simple calculator with functions 
for addition, subtraction, multiplication, and division.
*/

//Function to add two numbers

function add(a, b) {
    console.log("Addition: " + (a + b));
}

//Function to subtract two numbers

function subtract(a,b) {
    return a - b;
}

//Function to multiply two numbers

function multiply(a , b) {
    return a * b;
}

//Function to divide two numbers

function divide(a,b) {
    if(b === 0){
        return "Divider cannot be zero, try again"
    }
    return a / b;
}

add(5,4);
console.log("Subtraction: ", subtract(-9, 15));
console.log("Muliplication: ", multiply(6,3));
console.log("Division: ", divide(10,0));