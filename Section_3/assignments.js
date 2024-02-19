"use strict";

// Functions
console.log("Functions");
function describeCountry(country, population, capitalCity) {
  return `${country} has ${population} million people and its capital city is ${capitalCity}`;
}

console.log(describeCountry("USA", 350, "Washington DC"));
console.log(describeCountry("Canada", 45, "Ottawa"));
console.log(describeCountry("Mexico", 200, "Mexico City"));

// Function Declarations vs. Expressions
console.log("Function Declarations vs. Expressions");
function percentageOfWorld1(population) {
  return (population / 7900) * 100;
}

const percentageOfWorld2 = function (population) {
  return (population / 7900) * 100;
};

console.log(percentageOfWorld1(790), percentageOfWorld2(1580));

// Arrow Functions
const percentageOfWorld3 = (population) => (population / 7900) * 100;
console.log(percentageOfWorld3(7900));

// Functions Calling Other Functions
console.log("Functions Calling Other Functions");

const describePopulation = function (country, population) {
  return `${country} has ${population} million people, which is about ${percentageOfWorld2(
    population
  )}% of the world`;
};

console.log(describePopulation("USA", 350));

// Introduction to Arrays
// skipped

// Basic Array Operations (Methods)
console.log("Basic Array Operations (Methods)");
const neighbors = ["Russia", "Canada", "Mexico"];
console.log(neighbors);
neighbors.push("Utopia");
console.log(neighbors);
neighbors.pop();
console.log(neighbors);
neighbors[neighbors.indexOf("Canada")] = "le Canada";
console.log(neighbors);

// Introduction to Objects and Object Methods
console.log("Introduction to Objects and Object Methods");
const myCountry = {
  country: "USA",
  capital: "DC",
  language: "English",
  population: 350,
  neighbors: ["Russia", "Canada", "Mexico"],

  describe: function () {
    console.log(
      `${this.country} has ${this.population} million ${this.language}-speaking people, ${this.neighbors.length} neighboring countries and a capital called ${this.capital}`
    );
  },
};
