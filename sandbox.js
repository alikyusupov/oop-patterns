class Counter{
    constructor(){
        if(Counter.instance)
            return Counter.instance
        this.state = 0
        Counter.instance = this
        return this
    }
    inc(){
        this.state++
    }
    getState(){
        console.log(this.state)
    }
}

const counter = new Counter
const counter2 =new Counter

counter.inc()
counter2.inc()

counter.getState()
counter2.getState()