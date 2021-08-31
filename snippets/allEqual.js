const allEqual = arr => arr.every(val => val === arr[0])

console.log(allEqual([1,1,1,1]))//true
console.log(allEqual([1,1,1,10]))//false