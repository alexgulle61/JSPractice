            //0123456789... 
let school = "Harvard University";

let schoolLength = school.length;

console.log(schoolLength);

console.log(school.charAt(17));
console.log(school.charAt(0));

//Note: Index of String characters starts from 0
//  H e l l o
// [0 1 2 3 4]

let ch = school.charAt(4); //a
console.log(ch);

let ch1 = school.at(4); //a
console.log(ch1);

let ch2 = school[4]; //a
console.log(ch2);

let ch3 = school.charAt(100); // nothing (empty)
console.log(ch3);

let ch4 = school.at(100); // undefined
console.log(ch4);

let ch5 = school[100]; // undefined
console.log(ch5);

let school2 = school.toUpperCase();
console.log(school2);

let school3 = school.toLowerCase();
console.log(school3);

console.log(school.toLocaleLowerCase());
console.log(school.toLocaleUpperCase());

