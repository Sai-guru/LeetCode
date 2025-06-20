/**
 * @param {Array} arr
 * @param {Function} fn
 * @return {Array}
 */
function sortBy(arr, fn) {
  return arr.slice().sort((a, b) => fn(a) - fn(b));
}
