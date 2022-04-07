
// class Cricketer {
//     constructor(firstName, lastName, role, order) {
//         this.firstName = firstName;
//         this.lastName = lastName;
//         this.role = role;
//         this.order = order;
//     }

//     get firstName() {
//         return this._firstName;
//     }
//     set firstName(value) {
//         this._firstName = this.capitalizeFirstLetter(value);
//     }

//     get lastName() {
//         return this._lastName
//     }
//     set lastName(value) {
//         this._lastName = this.capitalizeFirstLetter(value);
//     }

//     capitalizeFirstLetter(str) {
//         return `${str[0].toUpperCase()}${str.slice(1)}`
//     }

//     isBatsman() {
//         return this.role !== "bowler"
//     }
// }

// const player1 = new Cricketer("abc", "pqr", "bowler", 'opener');

// console.log(player1);
// console.log(player1.isBatsman());



// EnCapsulation
class Cricketers {

    list = [];

    constructor(adminName) {
        this.admin = adminName;
    }

    get admin() {
        return this._admin;
    }
    set admin(value) {
        this._admin = Cricketers.capitalizeFirstLetter(value)
    }

    static capitalizeFirstLetter(str) {
        return `${str[0].toUpperCase()}${str.slice(1)}`
    }

    addCricketer(cricketer) {
        this.list.push(cricketer);
    }

    selectTeam(cricketerName) {
        if(this.admin === "Yagnesh") {
            this.#removeCricketer(cricketerName)
        }
    }

    // abstraction
    // Private Method
    #removeCricketer(name) {
        const index = this.list.findIndex(function(item) {
            return item.name === name;
        })
        this.list = [
            ...this.list.slice(0, index),
            ...this.list.slice(index + 1)
        ]
    }
}


const Name = "yagnesh"

console.log(Cricketers.capitalizeFirstLetter(Name));

const cricketers = new Cricketers("yagnesh");

console.log(cricketers.list);

cricketers.addCricketer({
    name: "Yagnesh",
    role: "batsman",
    order: "opener"
})


cricketers.addCricketer({
    name: "Krupal",
    role: "batsman",
    order: "opener"
})


cricketers.selectTeam("Krupal")

console.log(cricketers.list);

