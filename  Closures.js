// Closures

const add = (a, b) => a + b;
const sub = (a, b) => a - b;
const mul = (a, b) => a * b;
const div = (a, b) => a / b;
// const mod = (a, b) => a %% b;

const calc = (a, b) => {
    return (operator) => {
        return () => {
            return operator(a, b)
        }
    }
}

console.log(add(1, 5));

console.log(calc(1,2)(add)());
console.log(calc(1,2)(sub)());
console.log(calc(1,2)(mul)());
console.log(calc(1,2)(div)());


// 1. Everytime for new requirement have to change code
// 2. possibly bug chances are more
// 3. code reusability is not possible
// const calc = (a, b, operator) => {
//   if (operator === "+") {
//     return a + b;
//   } else if (operator === "-") {
//     return a - b;
//   } else if (operator === "*") {
//     return a * b;
//   } else if(operator === '/') {
//       return a / b;
//   } else {
//     return 0;
//   }
// };

// console.log(calc(1,2, '+'));
// console.log(calc(1,2, '-'));
// console.log(calc(1,2, '*'));
// console.log(calc(1,2, ''));
