/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  let symbolsLookUp = [];
  let symbolsSource = [];

  if (s1.length < s2.length) {
    symbolsLookUp = s1.split('');
    symbolsSource = s2.split('');
  } else {
    symbolsLookUp = s2.split('');
    symbolsSource = s1.split('');
  }

  let result = 0;

  for (let i = 0; i < symbolsLookUp.length; i++) {
    const symbol = symbolsLookUp[i];
    const indexFound = symbolsSource.indexOf(symbol);
    if (indexFound !== -1) {
      symbolsSource.splice(indexFound, 1);
      result++;
    }
  }

  return result;
}

module.exports = getCommonCharacterCount;
