// create the method which takes one param and return factorial number of this param. 
// factorial 6 = 6 * 5 * 4 * 3 * 2 * 1 = 720
// factorial 5 = 5 * 4 * 3 * 2 * 1 = 120
// factorial 4 = 4 * 3 * 2 * 1 = 24
// factorial 3 = 3 * 2 * 1 = 6
// factorial 2 = 2 * 1 = 2
// factorial 1 = 1 = 1

function getFactorial(num){
    if(num < 1){
        return "Number should be greater than 1";
    }
    let result = 1;
    for(let i=num; i>1; i--){
        result *= i //6, 5, 4, 3, 2
    }
    return result;
}

console.log("Factorial Number: " + getFactorial(0));