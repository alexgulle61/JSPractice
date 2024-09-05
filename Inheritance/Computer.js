const Product = require("./Product.js");

class Computer extends Product{

    constructor(name, price, ram){
        super(name, price); //this means I call name and price of the product from Product class
        this.ram = ram;
    }

    start(){
        console.log("The computer is starting");
    }

    displayInfo(){
        console.log('The product name is ' + this.name + ' and the product price is ' + this.price + " Ram: " + this.ram);
    }
}

let c = new Computer("HP", 999, 16);
c.displayInfo();
c.start();

let c1 = new Product("Mac", "1000"); 
c1.displayInfo();
//c1.start(); 