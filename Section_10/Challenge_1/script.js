'use strict';

let data1 = {};
data1.answers = [5, 2, 3];
let data2 = {};
data2.answers = [1, 5, 3, 9, 6, 1];

const poll = {
  question: 'What is your favourite programming language?',
  options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
  // This generates [0, 0, 0, 0]. More in the next section!
  answers: new Array(4).fill(0),
};

poll.registerNewAnswer = function () {
  const answer = Number(
    prompt(`What is your favorite programming language?
  0: JavaScript
  1: Python
  2: Rust
  3: C++
  (Write option number)`)
  );
  (answer === 0 || answer === 1 || answer === 2 || answer === 3) &&
    this.answers[answer]++;
  console.log(answer);
  this.displayResults('string');
};

document
  .querySelector('.poll')
  .addEventListener('click', poll.registerNewAnswer.bind(poll));

poll.displayResults = function (type = 'array') {
  if (type === 'array') {
    console.log(this.answers);
  }
  if (type === 'string') {
    console.log(`Poll results are ${[...this.answers]}`);
  }
};

poll.displayResults.call(data1, 'array');
poll.displayResults.call(data1, 'string');
poll.displayResults.call(data2, 'array');
poll.displayResults.call(data2, 'string');
