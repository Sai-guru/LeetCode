/**
 * @param {Object|Array} obj
 * @return {Object|Array}
 */
function compactObject(obj) {
  if (Array.isArray(obj)) {
    return obj
      .map(compactObject) // recursively clean elements
      .filter(Boolean);   // remove falsy
  } else if (obj !== null && typeof obj === "object") {
    const result = {};
    for (const key in obj) {
      const value = compactObject(obj[key]);
      if (Boolean(value)) {
        result[key] = value;
      }
    }
    return result;
  } else {
    return obj;
  }
}
