const car = {
    wheels:4,
    init(){
        return `У меня ${this.wheels} колеса и мой хозяин ${this.owner}`
    }
}

const carWithOwner = Object.create(car,{
    owner:{
        value:"Alex"
    }
})

console.log(carWithOwner.init())

class Tesla{
    constructor(model, color, price, hasAutopilot){
        this.model = model
        this.color = color
        this.price = price
        this.hasAutopilot = hasAutopilot
    }
    produce(){
        return new Tesla(this.model, this.color, this.price, this.hasAutopilot)
    }
}

const protoCar = new Tesla("S1","red",50000,false)

const car1 = protoCar.produce()
const car2 = protoCar.produce()
car2.price = 100000
car1.color = "white"
car1.hasAutopilot = true
console.log(car2, car1)