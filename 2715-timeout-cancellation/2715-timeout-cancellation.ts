function cancellable(fn, args, t) {
  const timeoutId = setTimeout(() => {
    fn(...args);
  }, t);

  const cancelFn = () => {
    clearTimeout(timeoutId); // Cancel the execution
  };

  return cancelFn;
}
