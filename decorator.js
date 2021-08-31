class Server{
    constructor(ip, port){
        this.ip = ip;
        this.port = port;
    }
    get url(){
        return `https://${this.ip}:${this.port}`
    }
}

function aws(server){
    server.isAWS = true;
    server.awsInfo = function(){
        return server.url
    }
    return server
}

const awsServer = aws(new Server("12.25.235.22","80"))
console.log(awsServer.isAWS, awsServer.awsInfo())

//custom bind - decorator==================================================================

function bind(fn, context){
    return function(){
        return fn.apply(context,arguments)
    }
}

function greet(){
    return `${this.name} says hi!`
}

const person = {
    name: "Alex"
}

console.log(greet.apply(person))

//fibonacci example ===========================================================

let timers = {}

function timingDecorator(fn, timer){
    return function(){
        let start = Date.now()//Дополнительная функционалность
        const result = fn.apply(this, arguments)//Основная задача
        if(!timers[timer]) timers[timer] = 0//Дополнительная функционалность
        timers[timer] +=  Date.now() - start//Дополнительная функционалность
        return result//Основная задача
    }
}

let fibonacci = function f(n){
    return n > 2 ? f(n - 1) + f(n - 2) : 1
}
fibonacci = timingDecorator(fibonacci, "fibo")

console.log(fibonacci(10))
console.log(fibonacci(20))

console.log(timers.fibo + " ms")


//==================================================================

function work(a) {
    console.log("Logging..."+a)
    /* ... */ // work - произвольная функция, один аргумент
  }
  
  function makeLogging(f, log) { /* ваш код */
    function wrapper(a){
        log.push(a)
        return f.call(this,a)
    }
    return wrapper
 }

 const user = {
     work(a){
        console.log("Logging with method..."+a)
     }
 }
  
  work = makeLogging(work, log=[]);
  work(1); // 1, добавлено в log
  work(5); // 5, добавлено в log

  user.work = makeLogging(user.work, log=[])
  user.work(4)
  user.work(14)
  
  for (var i = 0; i < log.length; i++) {
    console.log( 'Лог:' + log[i] ); // "Лог:1", затем "Лог:5"
}


function work(a, b) {
    console.log( a + b ); // work - произвольная функция
  }
  
  function makeLogging(f, log) { /* ваш код */
     function wrapper(){
        log.push([...arguments])
        return f.apply(this,arguments)
    }
    return wrapper
 }
  
  var log = [];
  work = makeLogging(work, log);
  
  work(1, 2); // 3
  work(4, 5); // 9
  
  for (var i = 0; i < log.length; i++) {
    var args = log[i]; // массив из аргументов i-го вызова
    console.log( 'Лог:' + args.join() ); // "Лог:1,2", "Лог:4,5"
  }

  //=====================================================================
  function f(x) {
    return Math.random() * x; // random для удобства тестирования
  }
  function makeCaching(f) {
    var cache = {};
  
    return function(x) {
      if (!(x in cache)) {
        cache[x] = f.call(this, x);
      }
      return cache[x];
    };
  
  }
  
  f = makeCaching(f);
  
  var a, b;
  
  a = f(1);
  b = f(1);
  console.log( a == b ); // true (значение закешировано)
  
  b = f(2);
  console.log( a == b ); // false, другой аргумент => другое значение

//=====================================================================

//   class Car{
//       constructor(){
//         this.model = "Car"
//         this.price = 10000
//       }
//       getPrice(){
//           return `${this.price}`
//       }
//       getDesc(){
//           return `${this.model}`
//       }
//   }

//   class Tesla extends Car{
//       constructor(){
//           super()
//           this.model = "Tesla"
//           this.price = 25000
//       }
//   }

//   class Autopilot{
//       constructor(car){
//           this.car = car
//       }
//     getPrice(){
//         return +this.car.getPrice()+5000
//     }
//     getDesc(){
//         return `${this.car.getDesc()} with autopilot`
//     }
//   }

//   class Parktronic{
//       constructor(car){
//         this.car = car
//       }
//     getPrice(){
//         return +this.car.getPrice()+3000
//     }
//     getDesc(){
//         return `${this.car.getDesc()} with parktronic`
//     }
//   }

//   let tesla = new Tesla()
//   tesla = new Autopilot(tesla)
//   tesla = new Parktronic(tesla)
//   console.log(tesla.getPrice(), tesla.getDesc())

class Car{
    constructor(){
        this.model = "Car"
        this.price = 10000
    }
    getprice(){
        return this.price
    }
    getmodel(){
        return `${this.model}`
    }
}
class Tesla extends Car{
    constructor(){
        super()
        this.model = "Tesla"
        this.price = 25000
    }
}
class Autopilot{//decorator
    constructor(car){
        this.car = car
    }
    getprice(){
        return this.car.getprice() + 5000
    }
    getmodel(){
        return `${this.car.getmodel()} with autopilot`
    }
}
let tesla = new Tesla()
tesla = new Autopilot(tesla)
console.log(tesla.getmodel(), tesla.getprice())

class Human{
    constructor(name){
        this.name = name
    }
    say(){
        console.log(`Hello I'm ${this.name}`)
    }
}
class HumanDecorated{
    constructor(subject, city, country){
        this.subject = subject
        this.subject.city = city
        this.subject.country = country
    }
    say(){
        console.log(`Hello I'm ${this.subject.name} and I'm from ${this.subject.city} ${this.subject.country}`)
    }
}

const human = new Human("Kelly");
human.say();

const decorated = new HumanDecorated(human, "New York", "USA");
decorated.say();