// const arr =  [1,2,3,4,5,6];

// const index = 3;

// const arr1 = arr.slice(0, index);
// console.log(arr1);

// const arr2 = arr.slice(index + 1);
// console.log(arr2);

// const finalArr = [...arr1, ...arr2];

// console.log(finalArr);


// const newArr = [0,...arr,7];

// console.log(arr);
// console.log(newArr);

const users = [
    {
        name: "Yagnesh",
        age: 30,
        gender: "Male"
    },
    {
        name: "Virat",
        age: 28,
        gender: "Male"
    },
    {
        name: "Rohit",
        age: 32,
        gender: "Male"
    },
    {
        name: "Alia",
        age: 21,
        gender: "Female"
    },
    {
        name: "deepika",
        age: 25,
        gender: "Female"
    },
    {
        name: "priyanka",
        age: 35,
        gender: "Female"
    }
]

const index = users.findIndex((element) => {
  return element.name === "Alia"
});


console.log(index);

const finalUsers = [
    ...users.slice(0, index),
    {...users[index], age: 23},
    ...users.slice(index + 1)
]

console.log(users);

console.log(finalUsers);

// > 1 > N
// O(logN)
// const index = users.findIndex(function(item) {
//     return item.name === 'Rohit'
// })

// console.log(index);

// O(1)
// console.log(users[index]);


// const finalUsersData = [
//     ...users.slice(0, index),
//     {...users[index], age: 31},
//     ...users.slice(index + 1)
// ]

// console.log(finalUsersData);

// const newUser = {
//     name: "Rishbh",
//     age: 22,
//     gender: 'Male'
// }

// const updatedUsers = [
//     ...users,
//     newUser,
// ]

// console.log(updatedUsers);



