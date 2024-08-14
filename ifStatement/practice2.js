let age = 17;
let dlTest = false;

if(age>=18){
    console.log("You are eligible to take the test");

    if(dlTest){
        console.log("You are eligible to take Driver Licence");
    }
}
else 
    console.log("You need to wait for the age 18")

    //Ternary operator

    let age1 = 19;

    age1 > 18 ? console.log("You are eligible") : console.log("You are not eligible")

    let num = 10;
 
    num > 0  ? ( num % 2 == 0 ? console.log("Positive and even") : console.log("Positive and odd") ) 
    : console.log ("not positive")

    let budget = 15;
    let price = 10; 

    if(budget > price){
        console.log ('you can buy stuff')
    } 
    else if (budget = price){
        console.log ('you do not have enought money')
    }
    else{
        console.log ('you do not have enought money')
    }



    budget > price ? console.log ('you can buy stuff') : console.log ('you do not have enought money') 