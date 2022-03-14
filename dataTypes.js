const firstName = "Yagnesh";
const lastName = "Modh";
const age = 30;
const isEmployee = false;

console.log(firstName);

const a = 1;

console.log(typeof a);

const b = 1;

console.log(typeof b);

// == will check only value
console.log(a == b);

//  === will check value and data type
console.log(a === b);



console.log(a == b);

const obj1 = { a: 1};
const obj2 = { a: 1};

console.log(obj1.a == obj2.a);


// object
//  store "related" information we can use Object

// Store collection of data we can use Array

const arr = [
    "yagnesh", // 0
    "krupal", // 1
    "pruthvish", // 2
    1,
    "ankita", // 3
    "dhara" // 4
]

const arr1 = [
    "yagnesh",
    "modh",
    30,
    false,
    "male"
]

console.log(arr1[0]);
console.log(arr1[1]);
console.log(arr1[2]);
console.log(arr1[3]);
console.log(arr1[4]);

// Array notation
console.log(arr[3]);

// console.log(arr.indexOf("devang"));



const students = [
    { name: 'yagnesh', gender: "Male" }, // 0
    { name: 'krupal', gender: "Male" },
    { name: 'Pruthvish', gender: "Male" },
    { name: 'ankita', gender: "Male" },
    { name: 'dhara', gender: "Male" },
]

console.log(arr.length);

console.log(typeof arr);


// 
const user = {
    firstName: "Yagnesh",
    lastName: "Modh",
    age: 30,
    isEmployee: false,
    age: 33
}

console.log(user);

// Dot Notation 
console.log(user.firstName);
console.log(user.lastName);

// Array Notation
const key = "lastName"

console.log(user[key]);

// TODO: Need to explain  this


user.gender = "male";
user.age = 33;

console.log(user);



// Primitive Type

//  call by value

// string
// number
// boolean
// bigInt
// symbol

// Non-primitive type

//call by reference

// object
// array