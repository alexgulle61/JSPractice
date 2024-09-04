const Family = require("./Family.js");
const fun = require("./Test.js");
const TestClass = require("./TestClass.js");


console.log(fun.multiply(3,5)); 
console.log(fun.divide(10,2));

//We cannot directly call the methods from class without object. 
let test = new TestClass();
test.start();

let family1 = new Family("John");
family1.eat(1);
console.log(Family.tomato);
