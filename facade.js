class Complaints{
    constructor(){
        this.complaints = []
    }
    reply(complaint){}//Метод реализован у инстанса
    add(complaint){
        this.complaints.push(complaint)
        return this.reply(complaint)
    }
}

class ProductComplaints extends Complaints{
    reply({id,customer, details}){
        return `Product: ${id}: ${customer} (${details})`
    }
}

class ServiceComplaints extends Complaints{
    reply({id,customer, details}){
        return `Service: ${id}: ${customer} (${details})`
    }
}

class ComplaintRegistry{
    register(customer, type, details){
        const id = Date.now()
        let complaint = type === "service" ? new ServiceComplaints() : new ProductComplaints()
        return complaint.add({id, customer, details})
    }
}

const registry = new ComplaintRegistry()
//console.log(registry.register("Alik","service","Не работает колл-центр"))
console.log(registry.register("Max","product","Кнопка залипает"))

class BuilderPipe{
    setBody(){
        console.log("Setting body...")
    }
    setEngine(){
        console.log("Setting engine...")
    }
    setWheels(){
        console.log("Setting wheels...")
    }
}
 
class CarBuilderFacade{
    constructor(car){
        this.car = car
    }
    assemble(){
        console.log(this.car.name)
        this.car.setBody()
        this.car.setEngine()
        this.car.setWheels()
    }
}
class Car extends BuilderPipe{
    constructor(name){
        super()
        this.name = name
    }
}

const myCar = new Car("Audi")
const myCarFacade = new CarBuilderFacade(myCar)
myCarFacade.assemble()
