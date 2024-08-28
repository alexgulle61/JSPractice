for(let i=0; i<=10; i++){
    console.log(i);
    if(i==5){
        break; //stop
    }
}



for(let i=0; i<=10;i++ ){
    if(i==5){
        continue; //skip
    }
    console.log(i);
}

//Question -> Find all numbers between 10 and 40 (40 included) that divisible by 4 and find how many numbers are there

// 10 11 12 13 14 15 16 17 18 19 20 ... 
//       12          16          20 ...

let counter = 0;
for(let i = 10; i<=40; i++){
    if(i % 4 == 0){
    console.log(i);
    counter ++;  //counter++ ==== counter += 1 ==== counter = counter + 1 
    }
}
console.log("Numbers: " + counter);




