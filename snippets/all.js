const all = (arr, fn = Boolean) => {
  return arr.every(fn);
};

console.log(all([1, 2, 3, 5], (x) => x < 5));
