// Employee

// name
// salary

// isPermanent()

// Boss

// hireEmployee



// // Parent Class
class Animal {
    constructor (type) {
        this.type = type;
    }
    
    makeSound(sound) {
        console.log(sound);
    }

    canFly() {
        if(this.type === 'dog') {
            return false;
        }
        return true;
    }
}

// // Child Class 
class Dog extends Animal {
    constructor () {
        super("dog")
    }

    isLoyal() {
        return true;
    }
    
    makeSound() {
        // console.log("bow wow");
        super.makeSound("bow wow")
    }

}

class Cat extends Animal {
    constructor () {
        super("cat")
    }

    isMoody() {
        return true
    }

    makeSound() {
        console.log("bow wow");
    }
    
}

// const a = new Animal("cat")

// console.log(a);

// a.makeSound()



// console.log(a.canFly());

const d = new Dog();

d.makeSound("bow-wow")

console.log(d.canFly());

console.log(d.isLoyal());


const c = new Cat();

c.isMoody()

// Encapsulation
// abstarction
// inheritance
// static methods
//  method overriding
// getters and setters
