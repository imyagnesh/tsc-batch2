
// 2 * 3 / 4 

// 3 + 4 * 2

// 2 / 4 - 3

const fn = (a, b, c) => {
    return operator1 => {
        const output = operator1(a, b)
         return operator2 => operator2(output, c)
    }
}

const mul = (a, b) => a * b;
const div = (a, b) => a / b;
const sum = (a, b) => a + b;

console.log(fn(2,3,4)(mul)(div));
console.log(fn(3,4,2)(sum)(mul));

// Array Methods(immutable Methods)

// findIndex
// Find
// Filter
// some
// Every
// map
// reduce
// fill

// Looping Technics
// for Of
// for in

// Async Programing

// 1. callback
// 2. Promises
// 3. Generator

// 5 More session