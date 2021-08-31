const fn = (n, limit)=>
    Array.from({length:Math.ceil(limit/n)},(_,i)=>(i+1)*n)



console.log(fn(5, 25)); // [5, 10, 15, 20, 25]