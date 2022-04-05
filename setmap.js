

const arr = [1,2,3,4,5,6,7,3,3,5,6,8,9,10];

// O(logN)
// const sixExist = arr.some(x => x === 6);

// console.log(sixExist);

// set WeakSet
// map  WeakMap

const set = new Set(arr);

console.log(set);

console.log(set.size);

set.add(9)

console.log(set.size);

set.add(11)

console.log(set.size);

console.log(set);



// console.log(set.has(6));

