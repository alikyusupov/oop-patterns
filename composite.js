class Equipment{
    getName(){
        return `${this.name}`
    }
    setName(name){
        this.name = name
    }
    getPrice(){
        return this.price
    }
    setPrice(price){
        this.price = price
    }
}
class Engine extends Equipment{
    constructor(){
        super()
        this.setName("Engine")
        this.setPrice(15000)
    }
}
class Body extends Equipment{
    constructor(){
        super()
        this.setName("Body")
        this.setPrice(12000)
    }
}
class Tools extends Equipment{
    constructor(){
        super()
        this.setName("Tools")
        this.setPrice(9000)
    }
}
class Composite extends Equipment{
    constructor(){
        super()
        this.equipments = []
    }
    add(part){
        this.equipments.push(part)
    }
    getPrice(){
        return this.equipments
        .map(eq=>eq.getPrice())
        .reduce((a,b)=>a+b)
    }
}
class Car extends Composite{
    constructor(){
        super()
        this.setName("Audi")
    }
}

const myCar = new Car()
myCar.add(new Engine())
myCar.add(new Body())
myCar.add(new Tools())

console.log(`My car ${myCar.getName()} is worth ${myCar.getPrice()}`)
