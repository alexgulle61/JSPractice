class Family{
    static tomato = 10; //Represents whole family
    static familyName = "Sopranos";

    constructor(name){
        this.name = name;
        //this.familyName =familyName; 
    }

    eat(number){
        Family.tomato -= number;
    }

    static sayGoodMorning(){
        console.log("Good morning!");
    }
}


let person1 = new Family("David", "Johnson");
let person2 = new Family("Adam", "Robinson");
person1.eat(1);
person2.eat(1);

// console.log("Leftover tomatoes: " + Family.tomato); // 8
// console.log(person1.familyName);
// console.log(person2);
// console.log(Family.familyName);
console.log(Family.tomato); // 7 
console.log(Family.sayGoodMorning());

module.exports = Family; //make sure you put export command end of the module