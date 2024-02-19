console.log("LESSON SCRIPT");
let js = "amazing";
// console.log(10 - 2);
// console.log("Jonas");
// console.log(true);
// console.log(typeof true);
// console.log(typeof js);

let age = 30;
age = 31;

const now = 2024;
const ageAndy = now - 1990;
const ageSarah = now - 2018;
const firstName = "Andy";
const lastName = "Stone";
// console.log(ageAndy, ageSarah);

const andyDesc = `I'm ${firstName} ${lastName}`;
// console.log(andyDesc);
// console.log(`testing
// multiple
// lines`);

const hasDriversLicense = true;
const hasGoodVision = false;

console.log(hasDriversLicense && hasGoodVision);
console.log(hasDriversLicense || hasGoodVision);
console.log(!hasDriversLicense);

const shouldDrive = hasDriversLicense && hasGoodVision;

if (shouldDrive) {
  console.log("Sarah is able to drive!");
} else {
  console.log("Someone else should drive...");
}
