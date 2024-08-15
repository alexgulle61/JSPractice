let age = 65;
if(age<18){
    console.log("You are a minor")
}
else if(18 <= age <= 64){
    console.log("You are an adult")
}
else {
    console.log("You are a senior");
}

let color = "red";

let grade = 80;
if(grade>=90){
    if(grade>95){
        console.log("Excellent");
    }else{
        console.log("Very Good");
    }
}else if(grade<90 && grade>=70){
    if(grade>=80){
        console.log("Good");
    }
    else{
        console.log("Satisfactory");
    }
}else {
    console.log("Needs Improvement");
}



switch (color) {
    case "red":
        console.log("Stop");
        break;
    case "green":
        console.log("Go");
        break;
    case "yellow":
        console.log("Caution");
        break;
    case "blue":
        console.log("Cool");
        break;
    default:
        console.log("Unknown Color");
        break;
}






let month = 7;  // You can change this value to test different months
let season;

switch (month) {
    case 12:
    case 1:
    case 2:
        season = "Winter";
        break;
    case 3:
    case 4:
    case 5:
        season = "Spring";
        break;
    case 6:
    case 7:
    case 8:
        season = "Summer";
        break;
    case 9:
    case 10:
    case 11:
        season = "Autumn";
        break;
    default:
        season = "Invalid month";
}

console.log(season);  // Output will depend on the value of 'month'