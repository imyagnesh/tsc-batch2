// Which are the ways we can achieve async programing?

// 1. callback
// 2. promises
// 3. generator

// on event completion function called is callback function

// promises


const login = () => {
    return new Promise((resolve, reject) => { 
        setTimeout(() => { resolve("login resolved") }, 1000)
     })
}

// let loader = true;

// // vanila javascript
// login()
// .then((value) => {
//     console.log(value);
// })
// .catch((err) => {
//     console.log(err);
    
// })
// .finally(() => {
//     console.log("finally");
//     loader = false;
// })

// const loadData = async () => {
//     let loader = false;
//     try {
//         const loginRes = await login();
//         console.log(loginRes);
//     } catch (e) {
//         console.log(e);
//     } finally {
//         console.log("finally");
//     }
// }

// loadData()


// const feeds = () => new Promise((resolve, reject) => { 
//     setTimeout(() => { resolve("feeds data") }, 2000)
//  })

//  const happening = () => new Promise((resolve, reject) => { 
//     setTimeout(() => { resolve("happening data reject") }, 2000)
//  })

//  const follow = () => new Promise((resolve, reject) => { 
//     setTimeout(() => { resolve("follow data") }, 2000)
//  })

//  const loadData = async () => {
//      try {
//          console.time("load Data")
//          const resData = await Promise.any([
//             feeds(),
//             happening(),
//             follow()
//          ])
//          console.log(resData);
         
//          console.timeEnd("load Data")
//      } catch (error) {
//          console.log(error);
//      }
//  }

//  loadData();

// all
// allSettled
// race
// any
