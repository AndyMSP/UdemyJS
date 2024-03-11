'use strict';

// const Person = function (firstName, birthYear) {
//   // Instance properties
//   this.firstName = firstName;
//   this.birthYear = birthYear;
// };

// Person.hey = function () {
//   console.log('Hey there!');
// };

// const jonas = new Person('Jonas', 1991);
// // const matilda = new Person('Matilda', 1991);
// // const jack = new Person('Jack', 1975);

// console.log(jonas);
// // console.log(matilda);
// // console.log(jack);

// Person.hey();

// // Prototypes
// Person.prototype.calcAge = function () {
//   console.log(2024 - this.birthYear);
// };
// // Person.prototype.species = 'human';

// // class declaration
// class PersonCl {
//   constructor(fullName, birthYear) {
//     this.fullName = fullName;
//     this.birthYear = birthYear;
//   }

//   calcAge() {
//     console.log(2024 - this.birthYear);
//   }

//   get age() {
//     return 2024 - this.birthYear;
//   }

//   set fullName(name) {
//     if (name.includes(' ')) this._fullName = name;
//     else alert(`${name} is not a full name`);
//   }

//   get fullName() {
//     return this._fullName;
//   }

//   static hey() {
//     console.log('Hi there!');
//     console.log(this);
//   }
// }

// const walter = new PersonCl('Walter White', 1965);

// const jessica = new PersonCl('Jessica Davis', 1996);

// console.log(jessica);

// const account = {
//   owner: 'Jonas S',
//   movements: [200, 530, 120, 300],

//   get latest() {
//     return this.movements.slice(-1).pop();
//   },

//   set latest(mov) {
//     this.movements.push(mov);
//   },
// };

// console.log(account.latest);
// account.latest = 50;

// const PersonProto = {
//   calcAge() {
//     console.log(2024 - this.birthYear);
//   },

//   init(firstName, birthYear) {
//     this.firstName = firstName;
//     this.birthYear = birthYear;
//   },
// };

// const steven = Object.create(PersonProto);
// steven.name = 'Steven';
// steven.birthYear = 2002;

// const sarah = Object.create(PersonProto);
// sarah.init('Sarah', 1979);

// const Person = function (firstName, birthYear) {
//   this.firstName = firstName;
//   this.birthYear = birthYear;
// };

// Person.prototype.calcAge = function () {
//   console.log(2024 - this.birthYear);
// };

// const Student = function (firstName, birthYear, course) {
//   Person.call(this, firstName, birthYear);
//   this.course = course;
// };

// // Linking prototypes
// Student.prototype = Object.create(Person.prototype);

// Student.prototype.introduce = function () {
//   console.log(`My name is ${this.firstName} and I study ${this.course}`);
// };

// const mike = new Student('Mike', 2020, 'CS');
// console.log(mike);
// mike.introduce();

// Student.prototype.constructor = Student;

// // class declaration
// class PersonCl {
//   constructor(fullName, birthYear) {
//     this.fullName = fullName;
//     this.birthYear = birthYear;
//   }

//   calcAge() {
//     console.log(2024 - this.birthYear);
//   }

//   get age() {
//     return 2024 - this.birthYear;
//   }

//   set fullName(name) {
//     if (name.includes(' ')) this._fullName = name;
//     else alert(`${name} is not a full name`);
//   }

//   get fullName() {
//     return this._fullName;
//   }

//   static hey() {
//     console.log('Hi there!');
//     console.log(this);
//   }
// }

// const andy = new PersonCl('Andy Stone', 1990);

// class StudentCl extends PersonCl {
//   constructor(fullName, birthYear, course) {
//     // Always needs to happen first for "this" keyword to be created
//     super(fullName, birthYear);
//     this.course = course;
//   }

//   introduce() {
//     console.log(`My name is ${this.fullName} and I study ${this.course}`);
//   }

//   calcAge() {
//     console.log(`I'm ${this.age}`);
//   }
// }

// const patrick = new StudentCl('Patrick Price', 1991, 'Aerospace Engineering');
// console.log(patrick);
// patrick.introduce();

// const PersonProto = {
//   calcAge() {
//     console.log(2024 - this.birthYear);
//   },

//   init(firstName, birthYear) {
//     this.firstName = firstName;
//     this.birthYear = birthYear;
//   },
// };

// const steven = Object.create(PersonProto);

// const StudentProto = Object.create(PersonProto);
// StudentProto.init = function (firstName, birthYear, course) {
//   PersonProto.init.call(this, firstName, birthYear);
//   this.course = course;
// };

// const jay = Object.create(StudentProto);
// jay.init('Jay', 1987, 'CS');

class Account {
  // Public Fields
  locale = navigator.language;

  // Private Fields
  #movements = [];
  #pin;

  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    this.#pin = pin;
    // this._movements = [];
    // this.locale = navigator.language;

    console.log(`Thanks for opening an account, ${owner}`);
  }

  // Public Methods

  getMovements() {
    return this.#movements;
  }

  deposit(val) {
    this.#movements.push(val);
    return this;
  }
  withdraw(val) {
    this.deposit(-val);
    return this;
  }

  requestLoan(val) {
    this.#approveLoan(val);
    return this;
  }

  // Private Methods (not fully implemented in most browsers yet)
  #approveLoan(val) {
    console.log(`$${val} loan approved!`);
    this.#movements.push(val);
  }
}

const acc1 = new Account('Jonas', 'EUR', 1111);
acc1.deposit(300).withdraw(19).requestLoan(37).deposit(234).deposit(567);
console.log(acc1);
