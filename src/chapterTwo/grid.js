/**
 * @function grid
 * @param {number} num
 * @returns {string} of hashes
 */
function grid(num) {
  const mainArr = [];
  let isEven = false;

  if (num < 0 || num === 0) {
    return 'Please enter a positive integer greater than zero';
  } else if (num / parseInt(num, 10) !== 1) {
    return 'Please enter a positive whole number integer greater than zero';
  }

  for (let i = 0; i < num; i++) {
    isEven = !isEven;
    let line = '';
    for (let j = 0; j <= num; j++) {
      const white = isEven ? ' ' : '#';
      const black = isEven ? '#' : ' ';

      if (j === 0) {
        line += white;
      } else if (j === num) {
        line += '\n';
      } else if (line.charAt(j - 1) === white) {
        line += black;
      } else {
        line += white;
      }
    }
    mainArr.push(line);
  }
  return mainArr.join('');
}

export default grid;
