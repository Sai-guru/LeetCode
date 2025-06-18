import _ from 'lodash'; // If you're using ES modules (recommended)
// const _ = require('lodash'); // If you're using CommonJS

type JSONValue = null | boolean | number | string | JSONValue[] | { [key: string]: JSONValue };
type Obj = Record<string, JSONValue> | Array<JSONValue>;

/**
 * Chunks an array into subarrays of a specified size using Lodash's _.chunk function.
 *
 * @param arr The array to chunk.
 * @param size The size of each chunk.
 * @returns A new array of chunked subarrays.
 */
function chunkWithLodash(arr: any[], size: number): any[][] {
    // Lodash's _.chunk directly provides the desired functionality.
    return _.chunk(arr, size);
}
