//ES6 syntax
class Database{
    constructor(data){
        if(Database.instance)return Database.instance
        Database.instance = this
        this.data = data
    }
    getData(){
        return this.data
    }
}

const mongoDB = new Database("mongo data")
console.log(mongoDB.getData())
const mySQL = new Database("SQL data")
console.log(mySQL.getData())

//ES5 syntax
function Singleton_(){
    if(Singleton_.instance)
        return Singleton_.instance
    Singleton_.instance = this
}

//ES5 syntax - better realization

const Singleton = (function(){
    let instance;
    function SingletonConstruct(){
        if(instance) return instance
        if(this && this.constructor === SingletonConstruct) 
            instance = this
        else
            return new SingletonConstruct()
    }
}())

class Counter{
    constructor(){
        if(Counter.instance)
            return Counter.instance
        this.count = 0
        Counter.instance = this
        return this
    }
    getCount(){
        return this.count
    }
    increaseCount(){
        return this.count++
    }
}
const counter_one = new Counter()
counter_one.increaseCount()
counter_one.increaseCount()
console.log(counter_one.getCount())//2

const counter_two = new Counter()
counter_two.increaseCount()
counter_two.increaseCount()
console.log(counter_two.getCount())//4