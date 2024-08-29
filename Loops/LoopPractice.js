/*
Question 1: For Loop
Problem: Write a for loop that prints all the even numbers between 10 and 25 (inclusive) 
and count how many numbers are there.
*/

// let count = 0;
// for (let i = 10; i <= 25; i += 2) {  //10, 12 , 14, 16,...
//     console.log(i);
//     count++;
// }
// console.log("Total Number: " + count)

// let count = 0;
// for (let i = 10; i <= 25; i ++){
//     if(i % 2 === 0){
//         console.log(i);
//         count++;
//     }
// }
// console.log("Total Number: " + count)

/*
Question 2: While Loop

Problem: Write a while loop that starts with a variable n set to 20. 
The loop should print the value of n and then decrement n by 3 in each iteration. 
The loop should stop when n is less than 1.
*/

// let n = 20;

// while (n >= 1) {
//     console.log(n);
//     n -= 3;
// }

/*
Question 3: Do…While Loop

Problem: Write a do...while loop that initializes a variable count to 0. 
The loop should print “Counting: “ followed by the value of count, 
then increment count by 1. The loop should run as long as count is less than 10.
*/

let count = 0;

do {
    console.log("Counting: " + count);
    count++;
} while (count < 10);