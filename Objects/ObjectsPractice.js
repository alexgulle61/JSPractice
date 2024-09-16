let person = {
    firstName: 'Osman',
    lastName: 'Gulle',
    age : 35,

    getFullName: function(){
        //return this.firstName + " " + this.lastName;
        return `Hello Osman, your age is ${this.age}`; //${variable} --> allows us to combine string and properties (variables)
    },

    whatAge: function() {
        console.log(this.age);
    }
}
console.log(person['firstName']);
// console.log(person.firstName);
// console.log(person.lastName);
// console.log(person.whatAge(5));

console.log(person.getFullName());