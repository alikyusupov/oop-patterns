const fn = (arr,func)=>{
    const eql = func(arr[0])
    return arr.every(val=> func(val)===eql)
}
console.log(fn([1.1, 1.2, 1.3], Math.round)); // true
console.log(fn([1.1, 1.3, 1.6], Math.round)); // false