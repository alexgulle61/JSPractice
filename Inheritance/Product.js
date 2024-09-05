class Product{

    constructor(name, price) {
        this.name = name;
        this.price = price;
    }

    displayInfo(){
        console.log('The product name is ' + this.name + ' and the product price is ' + this.price);
    }

}

let c1 = new Product("Acer", 500);
c1.displayInfo();

module.exports = Product;