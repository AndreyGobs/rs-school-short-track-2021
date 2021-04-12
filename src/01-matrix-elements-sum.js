/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix = [[]]) {
  const rejectedColumns = new Set();
  let result = 0;
  matrix.forEach((row) => {
    for (let j = 0; j < row.length; j++) {
      const item = row[j];
      if (item === 0) {
        rejectedColumns.add(j);
      }
      if (!rejectedColumns.has(j)) {
        result += item;
      }
    }
  });
  return result;
  // throw new Error('Not implemented');
}

module.exports = getMatrixElementsSum;
