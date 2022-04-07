// // Sync Programing

// // Async Programing

// console.log(1); // 1ms
// console.log(2); // 1ms
// console.log(3); // 1ms
// console.log(4); // 1ms

// // 4ms

// console.log(1); // 1ms
// console.log(2); // 1 minute
// console.log(3); // 1 ms
// console.log(4); // 1 ms

// // 1 miute and 3 ms

// // Javascript is Sync and single threaded Language

// // Javascript is using v8 engine developed by google

// console.log(1); // 1ms
// console.log(2); // 1 minute
// console.log(3); // 1 ms
// console.log(4); // 1 ms


// console.log(1); // 1ms
// console.log(3); // 1 ms
// console.log(4); // 1 m

// console.log(2); // 1 minutes

// console.log(1)
// setTimeout(() => { console.log(2); }, 3.3)
// console.log(3)
// setTimeout(() => { console.log(4); }, 3)
// console.log(5)


// How to achieve async programing in javascript

// 1. Callback

// 2. Promise

// 3. generator(Added recently)


// document.addEventListener("click", () => {
//     console.log("Clicked");
// })



setTimeout(() => { console.log("a3")}, 0)

// setInterval(() => { console.log("a4") }, 1000)

console.log("a1");
console.log("a2");

// Pending Stage
// FullFilled
// Rejected

// const p1 = () => new Promise((resolve, reject) => {
//     // Server call
//     // whatever data i get from server i will pass as resolve paramete
//     // resolve("p1 resolved")
//     reject("p1 rejected")
// })

// p1()
// .then((value) => {
//     console.log("Then section " + value);

//     // write a code to display data on the page
// })
// .catch((error) => {
//     console.log("catch block  " + error);
//     // write a code here to display error message on the page
// })



const login = () => {
    return new Promise((resolve, reject) => {
        resolve("asdfadfads")
      })
}

const users = (token) => {
    return new Promise((resolve, reject) => { 
        if(!token) {
            reject("token is not available")
        } else {
            resolve("users data")
        }
    
     })
}

// ES5 Approach
// login()
// .then((value) => {
//     console.log(value);
//     users(value)
//     .then((userData) => {
//         console.log(userData);

//     })
//     .catch((error) => {
//         console.log(error);
//     })
// })
// .catch((error) => {
//     console.log(error);
// })


const loadData = async () => {
    try {
        const loginRes = await login();
        const userRes = await users(loginRes);
        console.log(loginRes);
        console.log(userRes);
    } catch (error) {
        console.log(error);
    }
}

loadData();