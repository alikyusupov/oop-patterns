class Car{
    constructor(model, price){
        this.model = model
        this.price = price
    }
}

class CarFactory{
    constructor(){
        this.cars = []
    }
    create(model, price){
        const candidate = this.getCar(model)
        if(candidate){
            return candidate
        }
        const car = new Car(model, price)
        this.cars.push(car)
        return car
    }
    getCar(model){
        return this.cars.find(car=>car.model === model)
    }
}


const factory = new CarFactory()



const BWW_1 = factory.create("BMW",12000)
const BMW_2 = factory.create("BMW",15000)
const SAAB_1 = factory.create("SAAB",25000)

console.log(factory.cars.length)


//********************************************************************* */
class ComputerCollection{
    static count = 0;
    add(){
        ComputerCollection.count++
    }
}



const computers = new ComputerCollection();

    computers.add("Dell", "Studio XPS");
    computers.add("Dell", "Studio XPS");
    computers.add("Dell", "Studio XPS");
    computers.add("Dell", "Studio XPS");
    computers.add("Dell", "Studio XPS");
    computers.add("HP", "Envy", "Intel");
    computers.add("HP", "Envy", "Intel");

    console.log("Computers: " + ComputerCollection.count);
    // console.log("Flyweights: " + FlyWeightFactory.getCount());