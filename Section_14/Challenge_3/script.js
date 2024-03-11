'use strict';

// ############### Challenge 1 ##############################################################
// 1. Use a constructor function to implement a 'Car'. A car has a 'make' and a
// 'speed' property. The 'speed' property is the current speed of the car in
// km/h

const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};

// 2. Implement an 'accelerate' method that will increase the car's speed by 10,
// and log the new speed to the console

Car.prototype.accelerate = function () {
  this.speed += 10;
  console.log(this.speed);
};

// 3. Implement a 'brake' method that will decrease the car's speed by 5, and log
// the new speed to the console

Car.prototype.brake = function () {
  this.speed -= 5;
  console.log(this.speed);
};

// 4. Create 2 'Car' objects and experiment with calling 'accelerate' and
// 'brake' multiple times on each of them

const c1 = new Car('BMW', 120);
const c2 = new Car('Mercedes', 95);

// c1.accelerate();
// c2.accelerate();
// c2.brake();
// c2.accelerate();
// c1.accelerate();
// c2.accelerate();
// c1.brake();
// c1.brake();
// c1.brake();
// c2.brake();
// console.log(c1, c2);

// Test data:
// § Data car 1: 'BMW' going at 120 km/h
// § Data car 2: 'Mercedes' going at 95 km/h

// // ############### Challenge 2 ##############################################################

// // 1. Re-create Challenge #1, but this time using an ES6 class (call it 'CarCl')

// class CarCl {
//   constructor(make, speed) {
//     this.make = make;
//     this.speed = speed;
//   }

//   accelerate() {
//     this.speed += 10;
//   }

//   brake() {
//     this.speed -= 5;
//   }

//   // 2. Add a getter called 'speedUS' which returns the current speed in mi/h (divide
//   // by 1.6)
//   get speedUS() {
//     return this.speed / 1.6;
//   }

//   // 3. Add a setter called 'speedUS' which sets the current speed in mi/h (but
//   // converts it to km/h before storing the value, by multiplying the input by 1.6)
//   set speedUS(mph) {
//     this.speed = mph * 1.6;
//   }
// }

// const c3 = new CarCl('Ford', 120);

// // 4. Create a new car and experiment with the 'accelerate' and 'brake'
// // methods, and with the getter and setter.
// // Test data:
// // § Data car 1: 'Ford' going at 120 km/h

// ############### Challenge 3 ##############################################################

// 1. Use a constructor function to implement an Electric Car (called 'EV') as a child
// "class" of 'Car'. Besides a make and current speed, the 'EV' also has the
// current battery charge in % ('charge' property)

const EV = function (make, speed, charge) {
  Car.call(this, make, speed);
  this.charge = charge;
};

EV.prototype = Object.create(Car.prototype);

const c3 = new EV('Tesla', 120, 23);
console.log(c3);

// 2. Implement a 'chargeBattery' method which takes an argument
// 'chargeTo' and sets the battery charge to 'chargeTo'

EV.prototype.chargeBattery = function (chargeTo) {
  this.charge = chargeTo;
};

c3.chargeBattery(90);
console.log(c3);

// 3. Implement an 'accelerate' method that will increase the car's speed by 20,
// and decrease the charge by 1%. Then log a message like this: 'Tesla going at 140
// km/h, with a charge of 22%'

EV.prototype.accelerate = function () {
  this.speed += 20;
  this.charge -= 1;
  console.log(
    `${this.make} going at ${this.speed}, with a charge of ${this.charge}`
  );
};

c3.accelerate();

// 4. Create an electric car object and experiment with calling 'accelerate',
// 'brake' and 'chargeBattery' (charge to 90%). Notice what happens when
// you 'accelerate'! Hint: Review the definiton of polymorphism �
// Test data:
// § Data car 1: 'Tesla' going at 120 km/h, with a charge of 23%
