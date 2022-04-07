
// CRUD Opetation

// C -> Create
// R -> Read
// U => Update
// D => Delete

// const arr = []
const arr = [
    1, // 0
    2, // 1
    3, // 2
    4, // 3
    5, // 4
    6, // 5
    7  // 6  
]

console.log(arr[0]);
console.log(arr[1]);
console.log(arr.length);

const alterNumberArr = [1,2,3,4,5,6,7,8,9,10];

const ans = [];


// for (let index = 0; index < alterNumberArr.length; index++) {
//     if(index % 2 === 0) {
//         ans.push(alterNumberArr[index]) 
//     }
// }

// console.log(ans.join(' '));

let sum = 0;

// O(N)
// O(logN)


for (let index = 0; index < arr.length; index = index + 2) {
    const element = arr[index];
    ans.push(arr[index])
}

console.log(ans.join(' '));

