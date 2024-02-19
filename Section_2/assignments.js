console.log("ASSIGNMENT SCRIPT");

// Values and Variables
console.log("Assignment Values and Variables");
let country = "USA";
let continent = "North America";
let population = 500;

console.log(country);
console.log(continent);
console.log(population);

// Data Types
console.log("Assignment Data Types");
let isIsland = false;
let language;
console.log(typeof isIsland);
console.log(typeof population);
console.log(typeof country);
console.log(typeof language);

// let, const and var
console.log("Assignment let, const and var");
language = "English";

// Basic Operators
console.log("Assignment Basic Operators");
console.log(population / 2);
// population++;
console.log(population);
if (population > 6000000) console.log("yes");
if (population < 6000000) console.log("No");
let description =
  country +
  " is in " +
  continent +
  ", and its " +
  population +
  " people speak " +
  language;
console.log(description);

// Strings and Template Literals
console.log("Assignment Strings and Template Literals");
description = `${country} is in ${continent}, and it's ${population} people speak ${language}!`;
console.log(description);

// Taking Decisions: if/else Statements
console.log("Taking Decisions: if/else Statements");
if (population < 33) {
  console.log(`${country}'s population is ${33 - population} below average`);
} else {
  console.log(`${country}'s population is ${population - 33} above average`);
}

// Equality Operators: == vs. ===
console.log("Assignment Equality Operators: == vs. ===");
// let numNeighbors = Number(
//   prompt("How many neighbor countries does your country have?")
// );
let numNeighbors = 1;
if (numNeighbors === 1) {
  console.log("Only 1 border!");
} else if (numNeighbors > 1) {
  console.log("More than 1 border");
} else {
  console.log("No borders");
}

if (language === "English" && population < 50 && !isIsland) {
  console.log(`You should live in ${country}`);
} else {
  console.log(`${country} does not meet your criteria :(`);
}

// The switch Statement
console.log("Assignment The switch Statement");
language = "spadnish";

switch (language) {
  case "chinese":
  case "mandarin":
    console.log("MOST number of native speakers!");
    break;
  case "spanish":
    console.log("2nd place in number of native speakers");
    break;
  case "english":
    console.log("3rd place");
    break;
  case "hindi":
    console.log("number 4");
    break;
  case "arabic":
    console.log("5th most spoken language");
    break;
  default:
    console.log("great language too!");
}

// The Conditional (Ternary) Operator
console.log("The Conditional (Ternary) Operator");
population = 10;
let word = population > 33 ? "above" : "below";
console.log(`${country}'s population is ${word} average`);
