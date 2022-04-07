

class authFlow {
    constructor() {
        
    }

    #login() {
        console.log("login success");
    }

    #logout() {
        console.log("logout success");
    }

    *auth() {
       yield this.#login(); 
       yield this.#logout(); 
    }
}


const authInstance = new authFlow();
const gen = authInstance.auth();

gen.next()
gen.next()



// const gen = xyz();

// for (const iterator of gen) {
//   console.log(iterator);
// }

// console.log(gen.next());
// console.log(gen.next());
// console.log(gen.next());
// console.log(gen.next());
// console.log(gen.next());

// gen.throw(new Error("i dont like output"))
