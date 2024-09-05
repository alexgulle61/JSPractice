const Animal = require('./animal');

class Cat extends Animal{
    constructor(name, color){
        super(name); //called from Animal class
        this.color = color;
    }

    speak(){
        console.log(this.name + " meows.");
    }

    purr(){
        console.log(this.name + ' is purring.');
    }
}

module.exports = Cat; 