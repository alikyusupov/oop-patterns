const fn = arr => (arr.length === new Set(arr).size)

console.log(fn([1,23,4,24,4]))