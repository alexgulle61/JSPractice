let myCash = 5000;
let ccLimit = 6000;
let total = myCash + ccLimit; //11000

let carPrice = 8000; 
              //false                 false               true
let result1 = ccLimit>=carPrice || myCash>=carPrice || total>=carPrice;

let result2 = ccLimit>=carPrice && myCash>=carPrice && total>=carPrice;
 
console.log(result2);

let num1 = 10;
let num2 = 15; 
            //true      //false
let final1 = num1 < 13 && num2 > 19; 

console.log(final1); //false

let num3 = 10;
let num4 = 15; 
            //true      //true
let final2 = num3 < 13 || num4 > 19; 

console.log(final2); //true