const aperture = (n, arr) =>
  n > arr.length ? [] : arr.slice(n-1).map((_,index)=> arr.slice(index, index + n))


console.log(aperture(2, [1, 2, 3, 4])); // [[1, 2], [2, 3], [3, 4]]


// console.log(aperture(3, [1, 2, 3, 4])); // [[1, 2, 3], [2, 3, 4]]
// console.log(aperture(5, [1, 2, 3, 4])); // []

// console.log([1,2,3,4,5].slice(1))
// console.log([2,3,4,5].slice(0,2))