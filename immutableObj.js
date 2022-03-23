// const obj = {
//     a: 1,
//     b: 2
// }

// obj.a = 5

// console.log(obj.a);

// const newObj = Object.assign({}, obj, {c: 3});

// console.log(obj);
// console.log(newObj);

// Benifit of Immutable approch
// 1. Performance 
// 2. avoid unnecessary server calls
// 3. avoid override data

// CRUD operation

// C -> Create

// R -> Read

// U -> Update

// D -> Delete


const obj = { a: 1, b: 2 }
const obj1 = { c: 3, d: 4}

const combineObj = {...obj, ...obj1}

console.log(combineObj);

// Old Javascript

// const newObj = Object.assign({}, obj, {c: 3});

// "..." is called spread operator
const newObj = {...obj, c: 3}

const updateObj = {...obj, b: 4}

console.log(obj);
console.log(newObj);

console.log(updateObj);


const user = {
    firstName: "Yagnesh",
    lastName: "Modh",
    age: 30,
    gender: "Male"
}

// Destructuring + Spread

const {gender, lastName, ...rest} = user;

console.log(gender);

console.log(rest);

// delete user.gender;

// console.log(user);

// Destructuring

const firstName = "Rohit";

const {firstName:userFirstName, age} = user;

console.log(firstName);
console.log(userFirstName);
console.log(age);


// dot notation
console.log(user.firstName);
console.log(user.lastName);
console.log(user.age);
console.log(user.gender);

// array notation
console.log(user["firstName"]);
console.log(user["lastName"]);
console.log(user["age"]);
console.log(user["gender"]);

const loginData = {
    username: "yagnesh",
    password: "Password1!",
    rememberMe: false
}

const {rememberMe, ...xyz} = loginData;

console.log(xyz);

