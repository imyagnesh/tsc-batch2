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

const updatedUsers1 = users.map((element) => {
  if(element.gender === 'male') {
    return {...element, profession: "cricketer"}
  } else {
    return {...element, profession: "actor"}
  }
});

console.log(updatedUsers1);

// profession: "cricketor"
// profession: "actor"

const exceptRohit = users.filter(x => x.name !== "rohit");

console.log(exceptRohit);


// O(N)
const updatedUsers = users.map((element, index) => {
console.log(index);
    if(element.name === "rohit") {
        return {...element, age: 28}
    } else {
        return element;
    }
})


// O(logN)
const index = users.findIndex((x, index) => {
    console.log(index);
    return x.name === "rohit"});

console.log(index);

const updateRohit = users.fill({...users[index], age: 28}, index, index + 1);

console.log(updateRohit);

const updatedRecords = [
    ...users.slice(0, index),
    ...users.slice(index + 1)
]

console.log(updatedUsers);

console.log(updatedRecords);

console.log(users);

// Map
// Reduce

const arr = [1,2,3,4,5,6];

// using map method we can update the data
// but we cant add new data or remove existing data
// always return same length of data

const newArr = arr.map(element => {
    if(element % 2 !== 0) {
        return element * 2
    }
    return element;
})

console.log(newArr);