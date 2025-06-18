/**
 * Chunks an array into subarrays of a specified size.
 * 
 * @param {Array} arr - The input array to be chunked.
 * @param {number} size - The size of each chunk.
 * @return {Array[]} - An array of chunked subarrays.
 */
var chunk = function(arr, size) {
  const res = [];
  let subarr = [];

  for (let i = 0; i < arr.length; i++) {
    subarr.push(arr[i]);

    if (subarr.length === size) {
      res.push(subarr);
      subarr = [];
    }
  }

  if (subarr.length) {
    res.push(subarr);
  }

  return res;
};

// Simulate input lines as if from a file or stdin
const inputLines = [
  "[1,2,3,4,5]",
  "1",
  "[1,9,6,3,2]",
  "3",
  "[8,5,3,2,6]",
  "6",
  "[]",
  "1"
];

// Loop through every pair of lines (array, then size)
for (let i = 0; i < inputLines.length; i += 2) {
  const arrParsed = JSON.parse(inputLines[i]);     // Convert string to array
  const size = parseInt(inputLines[i + 1]);         // Convert size to number

  const result = chunk(arrParsed, size);
  console.log(arrParsed,size);
  console.log(result);
 
}
