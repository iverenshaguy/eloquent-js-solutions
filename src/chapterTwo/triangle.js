/**
 * @function triangle
 * @returns {string} of hashes
 */
function triangle() {
  let hashes = '';
  let i;

  for (i = 0; i < 7; i++) {
    hashes += '#';
    console.log(hashes); // eslint-disable-line
  }
  return hashes;
}

export default triangle;
