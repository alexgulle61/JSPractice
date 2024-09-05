const Animal = require('./animal');
const Dog = require('./dog');
const Cat = require('./cat');

let genericAnimal = new Animal('Generic Animal'); 
genericAnimal.speak(); //makes sound

const myDog = new Dog('Buddy'); 
myDog.speak(); //barks
myDog.fetch();

const myCat = new Cat('Garfield', 'Orange');
myCat.speak(); //meows
myCat.purr();