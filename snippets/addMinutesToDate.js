const fn = (date, n)=>{
    const d = new Date(date)
    d.setTime(d.getTime() + n * 60000)
    return d.toISOString().split(".")[0].replace("T"," ")
}

console.log(fn('2020-10-19 12:00:00', 10))