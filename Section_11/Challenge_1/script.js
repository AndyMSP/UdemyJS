'use strict';

const juliaData = [3, 5, 2, 12, 7];
const kateData = [4, 1, 15, 8, 3];

const checkDogs = function (dogsJulia, dogsKate) {
  // 1. Julia found out that the owners of the first and the last two dogs actually have cats, not dogs! So create a shallow copy of Julia's array, and remove the cat ages from that copied array (because it's a bad practice to mutate function parameters)
  const cpyDogsJulia = [...dogsJulia].slice(1, -2);

  // 2. Create an array with both Julia's (corrected) and Kate's data
  const allDogs = [...cpyDogsJulia, ...dogsKate];

  // 3. For each remaining dog, log to the console whether it's an adult ("Dog number 1 is an adult, and is 5 years old") or a puppy ("Dog number 2 is still a puppy")
  allDogs.forEach(function (dog, i) {
    const str = `Dog number ${i} is ${
      dog >= 3 ? 'an adult, and is ' + dog + ' years old' : 'still a puppy'
    }`;
    console.log(str);
  });
};

// 4. Run the function for both test datasets
checkDogs(juliaData, kateData);
