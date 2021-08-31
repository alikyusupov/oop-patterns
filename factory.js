class MemeberShipSimple{
    constructor(name){
        this.name = name;
        this.cost = 150;
    }
}
class MemberShipPremium{
    constructor(name){
        this.name = name;
        this.cost = 250;
    }
}

class MemberShipFactory{
    static list = {
        simple: MemeberShipSimple,
        premium: MemberShipPremium
    }
    create(name, type="simple"){
        const MemberShip = MemberShipFactory.list[type]
        const member = new MemberShip(name)
        member.type = type
        member.define = function(){
            console.log(`${this.name} (${this.type}): ${this.cost}`)
        }
        return member
    }
}

const factory = new MemberShipFactory()
const members = [
    factory.create("Alex"),
    factory.create("Sam", "premium")
]

for(let member of members){
    member.define()
}

class FullTime {
    constructor () {
      this.rate = '$12'
    }
  }
  class PartTime {
    constructor () {
      this.rate = '$11'
    }
  }
  class Temporary {
    constructor () {
      this.rate = '$10'
    }
  }
  class Contractor {
    constructor () {
      this.rate = '$15'
    }
  }
  
  class Employee {
      static list = {
          fulltime: FullTime,
          parttime: PartTime,
          temporary:Temporary,
          contractor:Contractor

      }
    create (type) {
      let employee = new Employee.list[type]
      employee.type = type
      employee.say = function () {
        console.log(`${this.type}: rate ${this.rate}/hour`)
      }
      return employee
    }
  }
  
  const factory = new Employee()
  const fulltime = factory.create('fulltime')
  const parttime = factory.create('parttime')
  const temporary = factory.create('temporary')
  const contractor = factory.create('contractor')
  
  fulltime.say()
  parttime.say()
  temporary.say()
  contractor.say()

class BMW{
  constructor(model, price){
    this.model = model;
    this.price = price;
  }
}

class BMWFactory{
  create(type, price){
      return new BMW(type, price)
  }
}

const factory_ = new BMWFactory()
//console.log(factory_.create("x3"))
console.log(factory_.create("x5"))