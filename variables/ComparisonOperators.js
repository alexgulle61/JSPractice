let isFast = true; 
let result = !isFast; 

console.log(isFast); //true
console.log(result); //false

let isSunny = false; 
let weather = !isSunny; 

console.log(isSunny); //false
console.log(weather); //true

let number1 = 12;
let number2 = '12'; 
console.log(number1==number2); //true, it checks value only

let number3 = 12;
let number4 = '12'; 
console.log(number3 === number4); //false, it checks type and value 

let number5 = 5;
let number6 = 5; 
console.log(number5 != number6); 

let number7 = 5;
let number8 = '5'; 
console.log(number7 !== number8); 

// Note: There is no str.equal("") command on JavaScript

let str1 = "test";
let str2 = "test";
console.log(str1 == str2); //JS is case sensitive

let str3 = true;
let str4 = "true";
console.log(str3 === str4); //We cannot compare boolean and string 