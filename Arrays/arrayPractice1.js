//Arrays 
//1 
    const arr = [10,11,12];
    let arr2 = [1,2,3];
//2 
    const names = [];
    names[0] = 'david';
    names[2] = 'osman';

    console.log(names);

//3 
    const prices = new Array(1,2,3);
    console.log(prices);

/*
 1- Array is not fixed size in JS
 2- Array does not get any default value
*/
                        //0        1        2
const cars = new Array("Tesla", "Honda", "Lexus");
console.log(cars);
console.log(cars[2]);

console.log(cars.length);

// cars.length ==> size of the array

let arrString = cars.toString();  //Tesla,Honda,Lexus
console.log(arrString.length); 
let stringToArray = arrString.split("")
console.log(stringToArray);

// convert from array to string ==> toString()
// convert from string to array ==> split()

const cities = ['Houston', 'Chicago', 'New York', 10, true];
console.log(cities)

// JS will automatically change datatype for the array when we provide different types of values