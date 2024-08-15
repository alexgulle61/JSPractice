const classes = ["math", "computer", "coding", "playwright"];

classes[5] = "cypress";

console.log(classes[4]);
console.log(classes[5]);
console.log(classes);

console.log(classes.at(3)); //at() returns the value from given index

classes.pop();
console.log(classes); //pop() removes the last element from the array

classes.push("cypress"); //it will add new value to the end of the array
console.log(classes); 

classes.shift()
console.log(classes) //shift() removes first elemant from the array

classes.unshift("math")
console.log(classes) //unshift() adds element into the beginning the array

const arr2 = classes.slice(2,4);
console.log(arr2);  //slice() picks element from starting index and creates new array until end index

classes.sort();
console.log(classes); //sort() sort element in alphabetically 

console.log(classes.indexOf("math")); //returns the index value of the element

console.log(classes.includes("math"));
