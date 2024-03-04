'use strict';

// Create a function 'calcAverageHumanAge', which accepts an arrays of dog's
// ages ('ages'), and does the following things in order:

const calcAverageHumanAge = function (ages) {
  // 1. Calculate the dog age in human years using the following formula: if the dog is
  // <= 2 years old, humanAge = 2 * dogAge. If the dog is > 2 years old,
  // humanAge = 16 + dogAge * 4

  const humanAges = ages.map(function (age, i) {
    return age <= 2 ? 2 * age : 16 + age * 4;
  });
  // console.log(ages);
  // console.log(humanAges);

  // 2. Exclude all dogs that are less than 18 human years old (which is the same as
  // keeping dogs that are at least 18 years old)

  const adultAges = humanAges.filter(function (age) {
    return age >= 18;
  });
  // console.log(adultAges);

  // 3. Calculate the average human age of all adult dogs (you should already know
  // from other challenges how we calculate averages �)
  const avgAdultage = adultAges.reduce(function (acc, age, i, arr) {
    return acc + age / arr.length;
  }, 0);
  // console.log(avgAdultage);

  return avgAdultage;
};
// 4. Run the function for both test datasets
console.log(calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]));
console.log(calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]));

const calc2 = function (ages) {
  const avgAdultAge = ages
    .map((age) => (age <= 2 ? 2 * age : 16 + age * 4))
    .filter((age) => age > 18)
    .reduce((acc, age, i, arr) => acc + age / arr.length, 0);
  return avgAdultAge;
};

console.log(calc2([5, 2, 4, 1, 15, 8, 3]));
console.log(calc2([16, 6, 10, 5, 6, 1, 4]));
