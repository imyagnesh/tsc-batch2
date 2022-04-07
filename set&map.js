// all
// allSettled
// race
// any

// Primitive data
// const arr = []

// number
// string
// boolean
// big Number
// symbol

const arr = [1, "two", 3, "four", false, 3, 1];

// console.log([...new Set(arr)]);

// // set will remove all duplicate values
const set = new Set();

set.add()


// // indexing

// set.delete("four");

// console.log(set);

// for (const iterator of set) {
//     console.log(iterator);
// }


// const weakSet = new WeakSet();

// const obj = { a: 1};

// const arr1 = [1,2]

// weakSet.add(obj);
// weakSet.add(arr1);

// console.log(weakSet.has(obj));
// console.log(weakSet.has(arr1));

// weakSet.delete(obj);

// console.log(weakSet.has(obj));
// console.log(weakSet);

const map = new Map();

map.set("yagnesh", {
    name: "yagnesh",
    age: 33,
    gender: "male"
})

map.set("virat", {
    name: "virat",
    age: 30,
    gender: "male"
})

// map.delete("yagnesh")

console.log(map.get("virat"));
console.log(map.get("yagnesh"));


for (const [key, value] of map) {
    console.log(key);
    console.log(value);
}

const weakMap = new WeakMap();


const obj = ["yagnesh", "virat"]
weakMap.set(obj, [
    {
        name: "yagnesh",
        age: 33,
        gender: "male"
    },
    {
        name: "virat",
        age: 30,
        gender: "male"
    }
])

console.log(weakMap.get(obj));
console.log(weakMap.delete(obj));


// weakSet.



const a =  { a: 1}
const b =  { a: 1}

// we cant compare non primitive Data