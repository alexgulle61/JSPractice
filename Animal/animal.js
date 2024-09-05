// animal.js
class Animal {
    constructor(name){
        this.name = name;
    }

    speak(){
        console.log(`${this.name} makes sound.`)
    }
}

module.exports = Animal; 