

const arr = [...Array(100000000).keys()];

console.log(arr.length);

console.time("for");
for (let i = 0; i < arr.length; i++) {
}

console.timeEnd("for");

console.time("while")
let j = 0;
while (j<arr.length) {
    j++
}
console.timeEnd("while")

console.time("doWhile")
let k = 0;
do {
   k++ 
} while (k < arr.length);
console.timeEnd("doWhile")

console.time("foreach");
arr.forEach(element => {

});
console.timeEnd("foreach");