/**
 * @param {Array} arr1
 * @param {Array} arr2
 * @return {Array}
 */
function join(arr1, arr2) {
  const map = new Map();

  // Add all from arr1
  for (const obj of arr1) {
    map.set(obj.id, { ...obj });
  }

  // Add or merge from arr2
  for (const obj of arr2) {
    if (map.has(obj.id)) {
      map.set(obj.id, { ...map.get(obj.id), ...obj }); // merge: arr2 overrides arr1
    } else {
      map.set(obj.id, { ...obj });
    }
  }

  // Convert to array and sort by id
  return Array.from(map.values()).sort((a, b) => a.id - b.id);
}
