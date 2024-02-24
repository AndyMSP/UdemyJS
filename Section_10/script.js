'use strict';

// const bookings = [];

// const createBooking = function (
//   flightNum,
//   numPassengers = 1,
//   price = 199 * numPassengers
// ) {
//   const booking = {
//     flightNum,
//     numPassengers,
//     price,
//   };
//   console.log(booking);
//   bookings.push(booking);
// };

// // createBooking('DL123', 2, 100);
// // createBooking('DL123', undefined, 2);

// const flight = 'DL123';
// const andy = {
//   name: 'Andy Stone',
//   passport: 987654321,
// };

// const checkIn = function (flightNum, passenger) {
//   flightNum = 'NEW123';
//   passenger.name = 'Mr. ' + passenger.name;

//   if (passenger.passport === 987654321) {
//     alert('Check in');
//   } else {
//     alert('Wrong passport!');
//   }
// };

// checkIn(flight, andy);
// console.log(flight);
// console.log(andy);

// const newPassport = function (person) {
//   person.passport = Math.trunc(Math.random() * 10000000000);
// };

// newPassport(andy);
// checkIn(flight, andy);
// console.log(andy);

// const oneWord = function (str) {
//   return str.replace(/ /g, '').toLowerCase();
// };

// const upperFirstWord = function (str) {
//   const [first, ...others] = str.split(' ');
//   return [first.toUpperCase(), ...others].join(' ');
// };

// // Higher-order function
// const transformer = function (str, fn) {
//   console.log(`Original string: ${str}`);
//   console.log(`Transformed string: ${fn(str)}`);
//   console.log(`Transformed by: ${fn.name}`);
// };

// transformer('Javascript is the best!', upperFirstWord);
// transformer('Javascript is the best!', oneWord);

// const greet = function (greeting) {
//   return function (name) {
//     console.log(`${greeting} ${name}`);
//   };
// };

// const greeterHey = greet('Hey');

// const greet = (greeting) => (name) => {
//   console.log(`${greeting} ${name}`);
// };

// const lufthansa = {
//   airline: 'lufthansa',
//   iataCode: 'LH',
//   bookings: [],
//   book: function (flightNum, name) {
//     console.log(
//       `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
//     );
//     this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
//   },
// };

// lufthansa.book(123, 'Andy');
// lufthansa.book(456, 'Patrick');

// const eurowings = {
//   airline: 'Eurowings',
//   iataCode: 'EW',
//   bookings: [],
// };

// const book = lufthansa.book;

// book.call(eurowings, 789, 'Andy');

// const bookEW = book.bind(eurowings);
// bookEW(3412124, 'Jon');

// lufthansa.planes = 300;
// lufthansa.buyPlane = function () {
//   console.log(this);
//   this.planes++;
//   console.log(this.planes);
// };

// document
//   .querySelector('.buy')
//   .addEventListener('click', lufthansa.buyPlane.bind(lufthansa));

// const addTax = (rate, value) => value + value * rate;
// console.log(addTax(0.1, 200));

// const addVAT = addTax.bind(null, 0.23);

// console.log(addVAT(100));

// const taxCreator = function (rate) {
//   return function (value) {
//     return value + value * rate;
//   };
// };

// const tax25 = taxCreator(0.25);
// console.log(tax25(1000));

// const secureBooking = function () {
//   let passengerCount = 0;

//   return function () {
//     passengerCount++;
//     console.log(`${passengerCount} passengers`);
//   };
// };

// const booker = secureBooking();

// let f;

// const g = function () {
//   const a = 5;
//   f = function () {
//     console.log(a * 2);
//   };
// };

// const h = function () {
//   const b = 22;
//   f = function () {
//     console.log(b * 2);
//   };
// };

// const boardPassengers = function (n, wait) {
//   const perGroup = n / 3;

//   setTimeout(function () {
//     console.log(`We are now boarding all ${n} passengers`);
//     console.log(`There are 3 groups, each with ${perGroup} passengers`);
//   }, wait * 1000);

//   console.log(`Will start boarding in ${wait} seconds`);
// };

// boardPassengers(6, 3);

(function () {
  const header = document.querySelector('h1');
  header.style.color = 'red';
  header.addEventListener('click', function () {
    header.style.color = 'blue';
    console.log('clicked');
  });
})();
