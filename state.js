class Light{
    constructor(light){
        this.light = light
    }
}

class RedLight extends Light{
    constructor(){
        super("red")
    }
    sign(){
        return "stop"
    }
}
class YellowLight extends Light{
    constructor(){
        super("yellow")
    }
    sign(){
        return "wait"
    }
}
class GreenLight extends Light{
    constructor(){
        super("green")
    }
    sign(){
        return "go"
    }
}

class TrafficLight{
    constructor(){
        this.states = [
            new RedLight(),
            new YellowLight(),
            new GreenLight()
        ]
        this.current = this.states[0]
    }
    change(){
        const total = this.states.length
        let index = this.states.findIndex(light=>light===this.current)
        this.current = ++index < total ? this.states[index++] : this.states[0]
    }
    sign(){
        return this.current.sign()
    }
}

const traffic = new TrafficLight()
console.log(traffic.sign())
traffic.change()

console.log(traffic.sign())
traffic.change()

console.log(traffic.sign())
traffic.change()

console.log(traffic.sign())
traffic.change()

console.log(traffic.sign())
traffic.change()

console.log(traffic.sign())
traffic.change()

console.log(traffic.sign())
