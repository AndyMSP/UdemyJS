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

// ############### Challenge 2 ##############################################################

// 1. Re-create Challenge #1, but this time using an ES6 class (call it 'CarCl')

class CarCl {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }

  accelerate() {
    this.speed += 10;
  }

  brake() {
    this.speed -= 5;
  }

  // 2. Add a getter called 'speedUS' which returns the current speed in mi/h (divide
  // by 1.6)
  get speedUS() {
    return this.speed / 1.6;
  }

  // 3. Add a setter called 'speedUS' which sets the current speed in mi/h (but
  // converts it to km/h before storing the value, by multiplying the input by 1.6)
  set speedUS(mph) {
    this.speed = mph * 1.6;
  }
}

const c3 = new CarCl('Ford', 120);

// 4. Create a new car and experiment with the 'accelerate' and 'brake'
// methods, and with the getter and setter.
// Test data:
// § Data car 1: 'Ford' going at 120 km/h
