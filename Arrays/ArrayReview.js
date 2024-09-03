/*
let arr1 = [1,2,3];
console.log(arr1.length); //only for length, there should not be parathensis arr1.length
*/

                //0        1        2
let fruits = ["Orange", "Banana", "Apple"]; 

//Printing Array
console.log("Initial array: " + fruits);

//Accessing elements by index
console.log("First fruit: " + fruits[0]);
console.log("Second fruit: " + fruits[1]);

//Adding a new element to the end of the array
fruits.push("Grapes");
console.log("After adding Grapes: " + fruits);

//Adding a new element at the beginning 
fruits.unshift("Mango");
console.log("After adding Mango to the beginning: " + fruits);

//Remove the last element from the array 
let removedFruit = fruits.pop(); 
console.log("Removed fruit: " + removedFruit); 
console.log("After removing the last element: " + fruits);

//Remove the first element from the array
let removedFruit2 = fruits.shift();
console.log("Removed fruit from beginning: " + removedFruit2);
console.log("After removing: " + fruits);

//Finding the index of an element
let indexOfBanana = fruits.indexOf("Banana");
console.log("Index of Banana: " + indexOfBanana);

//Removing an element by index
fruits.splice(indexOfBanana,1);
console.log(fruits);

//Sorting the array alphabetically
fruits.sort();
console.log("Sorted array: " + fruits); 

//Reversing an array
fruits.reverse();
console.log("Reversed Array: " + fruits);

//Checking if an element exist in the array --- returns true or false
let hasApple = fruits.includes("Apple");
console.log("Is Apple in the array? " + hasApple);

let hasGrape = fruits.includes("Grapes");
console.log("Is Grapes in the array? " + hasGrape); 

let hello = "Hello World";
console.log(hello.split("e"));


