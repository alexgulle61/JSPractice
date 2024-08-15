/*
Problem 1: 
Write a JavaScript code that checks Age. It should print 
“You are a minor” if the age is less than 18, 
“You are an adult” if the age is between 18 and 64 (inclusive), and 
“You are a senior” if the age is 65 or older.
*/
let age1 = '18';

if(age >=0 && age<18){
    console.log("You are minor");
}
else if(age>=18 && age <=100){
    console.log("You are an adult");
}
else if(age>100){
    console.log("You are a senior")
}
else {
    console.log("invalid age")
}

let age = 125

if (age < 18) {
    console.log("You are a minor");
}
else if (age >= 18 || age <= 64  || age<=100) {
    console.log("You are an adult");
}
else if (age >= 65 || age<=100) {
    console.log("You are a senior");
}

else if (age>101) {
    console.log("invalid age ");
}

/*
Problem 2:
You have a variable color that contains 
the name of a color as a string ("red", "blue", "green", or "yellow"). 
Write a switch statement that checks the value of color and 
prints the following messages:

	•	If color is "red", print “Stop”.
	•	If color is "green", print “Go”.
	•	If color is "yellow", print “Caution”.
	•	If color is "blue", print “Cool”.

If the color is not one of these four, print “Unknown color”.
*/

let color = "hello";

switch (color) {
    case "red":
        console.log("Stop");
        break;
    case "green":
        console.log("Go");
        break;
    case "yellow":
        console.log("Caution")
        break;
    case "blue":
        console.log("Cool");
        break;
    default:
        console.log("Unknown color");
        break;
}

/*
Problem 3: 
Write a piece of code that checks a student’s grade and 
determines their status based on the following criteria:

	•	If the grade is 90 or above:
	•	If the grade is 95 or above, print “Excellent”.
	•	Otherwise, print “Very Good”.
	•	If the grade is 70 or above but less than 90:
	•	If the grade is 80 or above, print “Good”.
	•	Otherwise, print “Satisfactory”.
	•	If the grade is below 70, print “Needs Improvement”.
*/

let grade1 = 65;
if(grade >= 90){
    if(grade >= 95){
        console.log("Excellent");
    }
    else{
        console.log("Very Good");
    }
}
else if(grade >= 70){
    if(grade >= 80){
        console.log("Good");
    }
    else{
        console.log("Satisfactory");
    }
}
else {
    console.log("Needs Improvement");
}

let grade = 95;
if(grade >= 70 && grade <90){
    if(grade >= 80){
        console.log("Good");
    }
    else{
        console.log("Satisfactory");
    }
}
else if(grade >= 90){
    if(grade >= 95){
        console.log("Excellent");
    }
    else{
        console.log("Very Good");
    }
}
else {
    console.log("Needs Improvement");
}


/*
Problem 4: 
Write a JavaScript code called getSeason that 
takes a month number (1 through 12) as an argument and 
returns the corresponding season. Use a switch statement to 
determine the season based on the following:

	•	Winter: December (12), January (1), February (2)
	•	Spring: March (3), April (4), May (5)
	•	Summer: June (6), July (7), August (8)
	•	Autumn: September (9), October (10), November (11)

If the number is outside the range 1 through 12, return “Invalid month”.
*/

let month = 12;
let getSeason; 

switch (month) {
    case 12:
        // getSeason = "Something"
        // console.log(getSeason);
    case 1:
    case 2:
        getSeason = "Winter";
        break;
    case 3:
    case 4:
    case 5:
        getSeason = "Spring";
        break;
    case 6:
    case 7:
    case 8:
        getSeason = "Summer";
        break;
    case 9:
    case 10:
    case 11:
        getSeason = "Autumn";
        break;
    default:
        getSeason = "Invalid month";
        break;
}
console.log(getSeason);

