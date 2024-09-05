const Animal = require('./animal');

class Dog extends Animal{
    constructor(name, breed){
        super(name); //Call the super class constructor
        this.breed = breed;
    }

    speak(){
        console.log(this.name + " barks.");
    }

    fetch(){
        console.log(this.name + " is fetching.");
    }
}

module.exports = Dog; 
