// Javascript Methods

// Immutable Methods

// findIndex

// Find

// filter

// some

// every

// fill



// array of primitive data
const arr = [1,2,3,4,5,6,7,8];

console.log(arr.indexOf(4));

// arry of non primitive data

const arr1 = [
    {a: 1},
    {b: 2},
    {c: 3},
    {d: 4},
]


// if record found then return index
// else return -1

// best case scenario O(logN)
// worst case scenario O(N)
const index = arr1.findIndex(function(element) {
    console.log(element);
    return element.c === 3
})

// if record found then return data
// else return undefined

// best case scenario O(logN)
// worst case scenario O(N)
const data = arr1.find(function(element) {
    console.log(element);
    return element.c === 4
})

console.log(data);

console.log(arr1);



console.log(index);

// console.log(arr.indexOf());


const users = [
    {
        name: "yagnesh",
        age: 33,
        gender: "male"
    },
    {
        name: "virat",
        age: 30,
        gender: "male"
    },
    {
        name: "rohit",
        age: 32,
        gender: "male"
    },
    {
        name: "dipeeka",
        age: 26,
        gender: "female"
    },
    {
        name: "alia",
        age: 18,
        gender: "female"
    },
    {
        name: "priyanka",
        age: 38,
        gender: "female"
    }
]



// find all the records whose age is > 30 and gender is male

const records = users.filter((element) => {
  return element.age > 30 && element.gender === 'male'
});

console.log(records);


const rohitIndex = users.findIndex(element => element.name === "rohit");

console.log(rohitIndex);

console.log(users[rohitIndex]);

const rohitInfo = users.find(element => element.name === "rohit");

console.log(rohitInfo);


// if records found then return array of data
// else return empty array

const maleUsers = users.filter(element => {
    console.log(element);    
    return element.gender === "male"
});

// if any matching record found then return true;
// else return false

// best case scenario O(logN)
// worst case scenario O(N)
// return boolean value
const isChildExist = users.some(element => element.age < 18);

// in best case scenario O(N);
// worst case scenario O(logN)
// return boolean value
const isAdult = users.every(element => element.age >= 18);
console.log(isAdult);

console.log(isChildExist);

console.log(maleUsers);

const newUsers = users.fill({ name: "dhoni", age: 40, gender: "male" },3, 6);

console.log(newUsers);


// 100 records -> true
// find age who is greter then 60

// 100 records -> 