


// Anonymous Function
// Hoisting
// Overriding Function
// const add = function(a, b) {
//     return a + b;
// }

// const a = 1;


// if(a === 1) {
//     console.log("hello");
// } else {
//     console.log("Hola");
// }

// if(a === 1) {
//     console.log("hello");
// } else if(a === 2) {
//     console.log("hola");
// } else {
//     console.log("bonjour");
// }

// ternary operator
const a = 1;


const value = a === 1 ? "hello" : a === 2 ? "hola" : "boinjour" 

// converts anything into boolean
const p = !!false;

// invert boolean value
const q = !'str';

console.log(q);


console.log(p);

const x = 5;
const y = 10;

// if x exist then print x
// else print y
const value1 = x || y;

console.log(value1);

// if x exist then print y
// else print x;
const value2 = x && y;

console.log(value2);





console.log(value);


// occupy less memory
const add = (a, b) => a + b;

// const greet = name => {
//     if(name) {
//         return `Hello ${name}`
//     }
//     return "Hello"
// }

const greet = name => name ? `Hello ${name}` : "hello"

console.log(greet("Yagnesh"));


console.log(add(1,4));

// // const sum = add(1,5);

// // console.log(sum);
// console.log(add(1,23));

// // Hoisting
// // Void Function
// function add(a, b) {
//     console.log(a);
//     console.log(b);

//     return  a + b;
// }


// function add() {
//     return "hacked..."
// }

// console.log(add(1,23));

class Animal {
    constructor (type) {
        this.type = type;
    }

    printType() {
        console.log(this.type);
        setTimeout(() => {
            console.log(this);

            console.log(this.type);
        }, 1000)
    }
}

const animal = new Animal("Dog");

animal.printType()

// setInterval(function() {
//     console.log("set time out 1 sec");
// }, 1000)





