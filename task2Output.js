
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