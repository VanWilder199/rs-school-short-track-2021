/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
// eslint-disable-next-line no-undef
arr = [-1, 150, 160, 170, -1, -1, 180, 190];

function sortByHeight(arr) {
  const arrResult = arr.filter((elem) => elem !== -1).sort((a, b) => a - b);
  arrResult.sort((a, b) => a - b);
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== -1) {
      arr.splice(i, 1, arrResult.shift());
    }
  }
  return arr;
}
module.exports = sortByHeight;
