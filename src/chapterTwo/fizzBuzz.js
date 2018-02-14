/**
 * @function fizzBuzz
 * @returns {string} fizzBuzz
 */
function fizzBuzz() {
  for (let i = 1; i <= 100; i++) {
    if (i % 15 === 0) {
      console.log('FizzBuzz'); // eslint-disable-line
    } else if (i % 3 === 0) {
      console.log('Fizz'); // eslint-disable-line
    } else if (i % 5 === 0) {
      console.log('Buzz'); // eslint-disable-line
    } else {
      console.log(i); // eslint-disable-line
    }
  }
}

export default fizzBuzz;
