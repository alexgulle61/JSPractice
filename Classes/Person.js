class person{
    #loginName; 
    #password;
    constructor(firstName, lastName, age, phone, job){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.phone = phone;
        this.job = job;
    }

    loginName(loginName){
        this.#loginName = loginName;
    }
    retrunName(){
        return this.#loginName;
    }

    setPassword(password){
        this.#password = password;
    }
    getPassword(){
        return this.#password;
    }

    #greet(){
        console.log(`Hello ${this.firstName}!`)
    }

    callGreet(){
        return this.#greet();
    }
}

let person1 = new person("Osman", "Gulle", 35, 832123, "teacher");
let person2 = new person("John", "Doe", 45, 123123, "Actor");
person1.callGreet();
//console.log(person2);
// person2.loginName("jdoe");
// console.log("LoginName: " + person2.retrunName());
// person2.setPassword

//we will be back at 9.10am


