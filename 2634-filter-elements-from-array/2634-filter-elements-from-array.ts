function filter(arr: number[], fn: (n: number, i: number) => any): number[] {
  return arr.filter((value, index) => fn(value, index));
}
