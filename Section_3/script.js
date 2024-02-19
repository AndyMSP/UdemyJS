"use strict";

// function logger() {
//   console.log("My name is Andy");
// }

// logger();
// logger();

// function fruitProcessor(apples, oranges) {
//   console.log(apples, oranges);
//   const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
//   return juice;
// }

// const appleJuice = fruitProcessor(5, 0);
// console.log(appleJuice);

// // Function declaration
// function calcAge1(birthYear) {
//   return 2024 - birthYear;
// }
// const age1 = calcAge1(1990);
// console.log(age1);

// // Function expression
// const calcAge2 = function (birthYear) {
//   return 2034 - birthYear;
// };
// const age2 = calcAge2(1990);
// console.log(age2);
// const age3 = calcAge2(1950);
// console.log(age3);

// // Arrow function
// const calcAge3 = (birthYear) => 2024 - birthYear;
// const age3 = calcAge3(1990);
// console.log(age3);

// const yearsUntilRetirement = (birthYear, firstName) => {
//   const age = 2024 - birthYear;
//   const retirement = 65 - age;
//   return `${firstName} retires in ${retirement} years`;
// };
// console.log(yearsUntilRetirement(1990, "Andy"));

// function cutFruitPieces(fruit) {
//   return fruit * 4;
// }

// function fruitProcessor(apples, oranges) {
//   const applePieces = cutFruitPieces(apples);
//   const orangePieces = cutFruitPieces(oranges);

//   console.log(apples, oranges);
//   const juice = `Juice with ${applePieces} pieces of apple and ${orangePieces} pieces of orange.`;
//   return juice;
// }

// console.log(fruitProcessor(2, 3));

const Andy = {
  firstName: "Andy",
  lastName: "Stone",
  birthYear: 1990,
  job: "Engineer",
  friends: ["Misha", "Fleisch", "Patrick", "Shannon"],
  hasDriversLicense: true,

  calcAge: function () {
    this.age = 2024 - this.birthYear;
    return this.age;
  },
};

for (let rep = 10; rep < 10; rep++) {
  console.log(rep);
}
