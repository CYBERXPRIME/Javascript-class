/* class Person{

}
//new is used to produce a fresh objects
const person = new Person();
person.name ='Henry';
person.age = 20;
person.greet = function () {
    return `${this.name}, Wassup`
}

console.log(person.greet()); */

class Person{
    constructor(name){
        this.name= name
    }
}

const person = new Person("henry")

console.log(person);