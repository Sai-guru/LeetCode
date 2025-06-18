class ArrayWrapper {
  constructor(nums) {
    this.nums = nums;
  }

  valueOf() {
    // This method is automatically used in + operations
    return this.nums.reduce((sum, num) => sum + num, 0);
  }

  toString() {
    // This method is used when String(obj) is called
    return `[${this.nums.join(',')}]`;
  }
}
