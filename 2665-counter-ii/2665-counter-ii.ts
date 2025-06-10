function createCounter(x: number) {
  let current = x;

  return {
    increment: () => ++current,
    decrement: () => --current,
    reset: () => {
      current = x;
      return current;
    }
  };
}
