'use strict'
// Object-oriendted Programming
// calss: template
// Object: instance of a class
// JavaScript classes (언어 구현상 디테일)
//   - introduced in ES6
//   - syntactical sugar over prototype-based inheritance

// 1 class declarations
class Person {
    // constructor
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    // methods
    speak() {
        console.log(`${this.name}`);
    }
}


const hoon = new Person('hoon', 33);
console.log(hoon.name)
console.log(hoon.age)
hoon.speak()


// 2. Getter and setters
class User {
    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    get age() {
        return this._age;
    }

    set age(value) {
        this._age = value < 0 ? 0 : value;
    }


}

const user1 = new User('Steve', 'Job', -1);
console.log(user1.age);


function Person(name, first, second) {
    this.name = name;
    this.first = first;
    this.second = second;
}

Person.prototype.sum = function(){}

var Kim = new Person('Kim', 10 , 20);

console.log('Kim')

var lee = new Person('lee', 10, 10);

console.log('lee');

console.log(Kim.name)

Kim.sum()



function Person(name, first, second, third) {
    this.name = name;
    this.first = first;
    this.second = second;
    this.sum = function () {
        return this.first + this.second;
    }
}

var kim = new Person('kim', 10, 20);
kim.sum = function () {
    return 'modified : ' + (this.first + this.second);
}
var lee = new Person('lee', 10, 10);
console.log('kim.sum()', kim.sum());
console.log('lee.sum()', lee.sum());