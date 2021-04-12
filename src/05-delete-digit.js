/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const str = String(n).split('');
  const arr = [];

  for (let i = 0; i < str.length; i++) {
    const number = str.concat();
    number.splice(i, 1);
    arr.push(+number.join(''));
  }

  arr.sort((a, b) => b - a);

  return arr[0];
}

module.exports = deleteDigit;
