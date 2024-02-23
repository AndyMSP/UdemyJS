'use strict';

document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));

// select required elements
const textBoxEl = document.querySelector('textarea');
const btn = document.querySelector('button');

// // pre-add test data
// textBoxEl.textContent = `underscore_case
//  first_name
// Some_Variable
//   calculate_AGE
// delayed_departure`;

// Function to perform text conversion
const convert = function (e) {
  // store text in a variable
  const rawText = textBoxEl.value;
  console.log(rawText);

  // make all lowercase
  let text = rawText.toLowerCase();

  // separate into array of strings using new line and white space as separator
  let lines = text.split('\n');

  // process each string in array
  for (let i = 0; i < lines.length; i++) {
    // remove white space
    lines[i] = lines[i].trim();

    // // replace '_' with ' '
    // lines[i] = lines[i].replace('_', ' ');

    // isolate words
    let [first, second] = lines[i].split('_');
    lines[i] =
      (first + second[0].toUpperCase() + second.slice(1)).padEnd(20) +
      '+'.repeat(i + 1);
  }

  // join into string connected by new lines
  text = lines.join('\n');
  console.log(text);

  // replace data in box
  textBoxEl.value = text;
};

// Event listener to initiate process

btn.addEventListener('click', convert);
