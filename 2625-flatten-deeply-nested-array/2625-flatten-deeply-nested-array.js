/**
 * @param {Array} arr
 * @param {number} depth
 * @return {Array}
 */
function flat(arr, n) {
  const result = [];

  function helper(current, depth) {
    for (const item of current) {
      if (Array.isArray(item) && depth < n) {
        helper(item, depth + 1); // increase depth when flattening
      } else {
        result.push(item);
      }
    }
  }

  helper(arr, 0); // initial depth is 0
  return result;
}
;