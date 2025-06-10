type Fn = (...params: number[]) => number

function memoize(fn,memo={}) {

return function(...args) {
    const key = JSON.stringify(args)
    if(key in memo) return memo[key];
    return memo[key]=fn(...args);
}
}