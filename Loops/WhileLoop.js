let num1 = 6;
let num2 = 6;
//      6      6
while(num1 == num2){
    console.log("Hello");
    //num1 ++;
}

let num = 1;
while (num < 10){
    console.log(num);
    if(num == 3){
        continue; // skips the 3
    }
    else if(num == 5){
        break; //stopped the loop
    }
    num++;
}  

let i = 1;
do {
    console.log("do-while");
    i++;
}while(i<1);