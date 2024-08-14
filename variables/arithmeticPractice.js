let number1 = 10;
let number2 = 3;

console.log(number1 + number2); //13
console.log(number1 - number2); //7
console.log(number1 * number2); //30
console.log(number1 / number2); //3.3
console.log(number1 % number2); // 10 = 3 + 3 + 3 + 1 => 1 
console.log(number1 ** number2); // ** exponentional operation -> 10 ** 3 = 10 * 10 * 10

console.log(5+4);
console.log(3*4);

console.log(3 ** 2); // 3 ** 2 = 3 * 3 = 9

//PEMDAS => Paranthesis - Exponent - Multiplication - Division - Addition - Subtraction
let result = number1 % number2 * 2 + 8 - (9*0);  // 1 * 2 + 8 - 0 = 10
console.log(result);

//PEMDAS
console.log(16/4*2) 

//Unary operations
// number++ => it means first use original number then increase it by 1
// ++number => it means first add 1 then use the value
// number-- => it means first use original number then decrease it by 1
// --number => it means first subtract 1 then use the value

let number = 9;

console.log(number);

let result1 = 5 + number--; // 5 + 9 = 14, number+1

let result2 = 5 + number; // 5+10 = 15

console.log(result1);

console.log(result2);

console.log(number);

let num = 10;
console.log(num);
num++;

console.log(5+num);

console.log(17%4)