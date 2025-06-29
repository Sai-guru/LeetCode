function map(arr: number[], fn: (n: number, i: number) => number): number[] {
  const result: number[] = [];  //empty curr arr

  for (let i = 0; i < arr.length; i++) {
    result.push(fn(arr[i], i));
  }
  return result;
}
