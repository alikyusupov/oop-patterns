class Car{
    constructor(){
        this.autopilot = false
        this.parktronic = false
        this.navigator = false
    }
}
class CarBuilder{
    constructor(car){
        this.car = car
    }
    addAutopilot(autopilot){
        this.car.autopilot = autopilot
        return this
    }
    addParktronic(parktronic){
        this.car.parktronic = parktronic
        return this
    }
    addNavigator(navigator){
        this.car.navigator = navigator
        return this
    }
    build(){
        return this.car
    }
}
const car = new CarBuilder(new Car())
                .addAutopilot(true)
                .addParktronic(true)
                .addNavigator(true)
                .build()
console.log(car)

class Shop{
    construct(builder){
        builder.step1()
        builder.step2()
        return builder.get()
    }
}
class CarBuilder{
    constructor(){
        this.car = null
    }
    step1(){
        return this.car = new Car()
    }
    step2(){
        return this.car.addParts()
    }
    get(){
        return this.car
    }
}
class TruckBuilder{
    constructor(){
        this.truck = null
    }
    step1(){
        return this.truck = new Truck()
    }
    step2(){
        return this.truck.addParts()
    }
    get(){
        return this.truck
    }
}
class Car{
    constructor(){
        this.doors = 0
    }
    addParts(){
        this.doors = 4
    }
    say(){
        console.log("I am a " + this.doors + "-door car");
    }
}
class Truck{
    constructor(){
        this.doors = 0
    }
    addParts(){
        this.doors = 2
    }
    say(){
        console.log("I am a " + this.doors + "-door truck");
    }
}

function run() {
    const shop = new Shop();
    const carBuilder = new CarBuilder();
    const truckBuilder = new TruckBuilder();
    const car = shop.construct(carBuilder);
    const truck = shop.construct(truckBuilder);

    car.say();
    truck.say();
}

run()