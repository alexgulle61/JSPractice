let car1 = {
    brand: 'Toyota',
    model: 'Corolla',
    year: 2020,

    getCarInfo: function(){
        return `${this.brand} ${this.model} (${this.year})`
    }
}

let car2 = {
    brand: 'Honda',
    model: 'Civic',
    year: 2019,

    getCarInfo: function(){
        return `${this.brand} ${this.model} (${this.year})`
    }
}

let car3 = {
    brand: 'Ford',
    model: 'Mustang',
    year: 2021,

    getCarInfo: function(){
        return `${this.brand} ${this.model} (${this.year})`
    }
}

console.log(car1.getCarInfo());
console.log(car2.getCarInfo());
console.log(car3.getCarInfo());

class Car{
    //Defining variables(properties) with constructor
    constructor(brand, model, year, owner){
        this.brand = brand;
        this.model = model;
        this.year = year;
        this.owner = owner;
    }

    //when we define function(method) we do not need to use function keyword
    getCarInfo(){
        return `${this.brand} ${this.model} (${this.year}) ${this.owner}`
    }
}
//Create car objects
let carOne = new Car("Toyota", "Rav4", 2016, "Osman");
let carTwo = new Car("Honda", "CRV", 2019, "Nayana");
let carThree = new Car("Ford", "Fusion", 2025, "Bheem");

//Access
console.log(carOne.getCarInfo()); 
console.log(carTwo.getCarInfo()); 
console.log(car.getCarInfo); 