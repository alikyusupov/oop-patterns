const accumalateSum = (...nums)=>{
    return nums.reduce((acc,n)=>[...acc, n + +acc.slice(-1)],[])
}


//console.log(accumalateSum(1,2,3,4,5))

//[_, 1 + 0] => [1]
//[1, 1 + 2] => [1,3]
//[1, 3, 3 + 3] => [1,3,6]
//[1, 3, 6, 6 + 4] => [1,3,6,10]
//[1, 3, 6, 10, 10 + 5] => [1,3,6,10,15]

console.log(+[].slice(-1))//0