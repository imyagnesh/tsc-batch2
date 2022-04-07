const name = "yagnesh"


const finalName = `${name[0].toUpperCase()}${name.slice(1)}`

console.log(finalName);
console.log(name[0].toUpperCase());
console.log(name.slice(1));
// Javascript consider string as an array



// Object Oriented Programing

// 1. Polymorphism -> not possible in javascript
// 2. inheritance -> 
// 3. abstraction -> showing "only" necessary information
// 4. encapsulation -> put all related information together

// name
// age
// gender

// const yagnesh = {
//     firstName: 'yagnesh',
//     lastName: "Modh",
//     age: 30,
//     gender: 'male',
//     fullName() {
//         return `${this.firstName} ${this.lastName}`
//     }
// }

// const rohit =  {
//     firstName: 'Rohit',
//     lastName: "Sharma",
//     age: 28,
//     gender: 'male',
//     fullName() {
//         return `${this.firstName} ${this.lastName}`
//     }
// }

function add(a, b) {
    return a + b;
}

console.log(add(1,2));


// every object 
// property
// Method



class User {
    // Function which we write inside of class that is called method
    // Special Method
    // which will call when we create instance
    // call only once
    gender = "male"

    message = "Hello how are you?"


    constructor(firstName, lastName, age) {
        // this is the way create variable in class
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    set firstName(value) {
        this._firstName = this.capitalizeFirstLetter(value)
    }

    get firstName() {
        return this._firstName;
    }

    set lastName(value) {
        this._lastName = this.capitalizeFirstLetter(value)
    }

    get lastName() {
        return this._lastName;
    }

    capitalizeFirstLetter(str) {
        return `${str[0].toUpperCase()}${str.slice(1)}`
    }

    getFullName() {
        return `${this.firstName} ${this.lastName}`
    }

    changeName(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
}

// Create Instance -> creating object
const yagnesh = new User("yagnesh", "modh", 33);
console.log(yagnesh.getFullName()); 
yagnesh.changeName("yagnesh", "modi")

console.log(yagnesh.firstName);
console.log(yagnesh.lastName);


const virat = new User("Viat", "Kohli", 26);
console.log(virat.getFullName()); 

console.log(yagnesh);

console.log(virat);
console.log(yagnesh.firstName);
console.log(yagnesh.gender);



// console.log(yagnesh);



// Public, private, protected


console.log(user.fullName());


