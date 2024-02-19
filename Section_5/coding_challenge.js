'use strict';

// Function input is array of numbers. Example [12, 5, -5, 0, 0, 4]
// Create formatted string with following values:
//  - temperature
//  - day of temperature (starting with day 1)

const temps = [12, 5, -5, 0, 0, 4];

const printForecast = function (arr) {
  let forecast = '...';

  for (let i = 0; i < arr.length; i++) {
    forecast += ` ${arr[i]}C in ${i + 1} days ...`;
  }

  console.log(forecast);
};

printForecast(temps);
