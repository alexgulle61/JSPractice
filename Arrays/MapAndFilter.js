//Filter
/* 
    The Filter method creates a new array with all elements that pass a test implemented by the provided function
    It it typically used when you want to remove unwanted items from and array based on a condition
*/

// const numbers = [1,2,3,4,5];

// //Using arrow function with filter to get even numbers
// const evens = numbers.filter(number => number % 2 == 0);

// console.log(evens);

// const names = ["Adam", "David", "Alex", "Osman", "Joe", "Nicholas"];
// const longNames         =       names.filter                (names => names.length > 4)  ; 
// // name of new array          filter the original array       name of variables in new array 
// console.log(longNames);

//Map
/*
    The map method cretes a new array populated with the results of calling a provided function on every element
    in the calling array. It's used when you want to transform each element of an array in some way. 
*/

// 
// const transformedNames = names.map(names => `${names.toUpperCase()} + (${names.length}) + ${names.toLowerCase()}`);


// console.log(transformedNames);

// Use map to reverse each string and filter to remove names shorter than 5 characters
const names = ['Alice', 'Bob', 'Charlie', 'David', 'Nicholas'];
const processedNames = names
                            .map(names => names.split('').reverse().join('')) //Revers each string
                            .filter(reversedName => reversedName.length >= 5); //Keep only names with length longer or equal ot 5
console.log(processedNames);  

//if you want to manipulate each element of the array, you need to use .map(variable => condition)
//if you want to filter each elemetn of the array unders some condition .filter(variable => condition)

/*
You are building a small contact management system for a startup that
needs to keep track of its contacts efficiently.
Each contact should have a unique identifier for easy retrieval, 
and the system must securely handle sensitive information 
like usernames and passwords. You need to design a solution that:

	•	Uses object-oriented principles to manage contacts.
	•	Assigns a unique ID to each contact automatically.
	•	Encapsulates sensitive information (username and password) using private fields.
	•	Allows contacts to be accessed, modified, and listed using their unique IDs.

    Employeers{
    constrctor(firtName, lastName)
    
    static idNumber =0;
    idGenerator(firstName){
        
    }

    #loginName,
    #password,

    get loginName
    get Password
    set loginName
    set password
    }

    Osman Gulle (Construction)-> UserId (Function)-> userName and Password -> Call Osman Gulle with userId
*/