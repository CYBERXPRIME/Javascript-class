/* class User{
    constructor(firstName,secondName,credit){
        this.firstName = firstName
        this.secondName = secondName
        this.credit = credit
    }
}

class Teacher extends User{}
const user = new User('henry','umeadota',30)

console.log(user); */

/* class Person{
    hello(){
        return 'Hello, I am a person'
    }
}

class Programmer extends Person{
    hello(){
        return super.hello() + '. I am also a programmer'
    }
}

const person = new Programmer()
console.log(person.hello()); */

/* class Father{
    hello() {
        return 'i am your father'
    }
}

class Son extends Father {
    hello(){
        return super.hello() + '. WAW!! your my father'
    }
}

const child = new Son()
console.log(child.hello());
 */
class User {
  constructor(userName, email, password) {
    this.userName = userName;
    this.email = email;
    this.password = password;
    this.condition =
      this.userName === "joe" &&
      this.email === "umeadota@gmail.com" &&
      this.password === "123456";
  }

  logIn() {
    if (this.condition) return `welcome ${this.userName}`;
    else {
      return `invalid user credentials`;
    }
  }
}

class Admin extends User {
  constructor(userName, email, password) {
    super();
    this.userName = userName;
    this.email = email;
    this.password = password;
    this.condition =
      this.userName === "joe" &&
      this.email === "umeadota@gmail.com" &&
      this.password === "123456";
  }
}

const admin = new Admin("joe", "umeadota@gmail.com", "123456");
console.log(admin);
console.log(admin.logIn());
