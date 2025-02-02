/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
function getSumOfDigits(n) {
  if (n > 9) {
    const arr = String(n).split('').map((item) => parseInt(item, 10));
    const result = arr.reduce((sum, current) => sum + current);
    return getSumOfDigits(result);
  }
  return n;

  // throw new Error('Not implemented');
}

module.exports = getSumOfDigits;
