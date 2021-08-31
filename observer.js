//Simple version of Observer - Event Emitter
class EventEmitter{
    constructor(){
        this.events = []
    }
    on(type, listener){
        this.events[type] = this.events[type] || []
        this.events[type].push(listener)
    }
    emit(type, data){
        if(this.events[type]){
            this.events[type].forEach(listener=>listener(data))
        }
    }
}

const emitter = new EventEmitter()

emitter.on("event_one", data=>console.log("Data from event_one "+data))
emitter.on("event_two", data=>console.log("Data from event_two "+data))
emitter.on("event_two", data=>console.log("another Data from event_two "+data+" another"))
setTimeout(()=>{
    emitter.emit("event_one","apples")
},1000)
setTimeout(()=>{
    emitter.emit("event_two","bananas")
},2000)
setTimeout(()=>{
    emitter.emit("event_two","grapes")
},3000)


//Observer

class Subject{
    constructor(){
        this.observers = []
    }
    subscribe(observer){
        this.observers.push(observer)
    }
    unsubscribe(observer){
        this.observers = this.observers.filter(obs=>obs!==observer)
    }
    fire(action){
        this.observers.forEach(obs=>obs.update(action))
    }     
}

class Observer{
    constructor(state=1){
        this.state = state
        this.initState = state
    }
    update(action){
        switch (action.type) {
            case "INCREMENT":
                this.state = ++this.state
                break;
            case "DECREMENT":
                this.state = --this.state
                break;
            case "ADD":
                this.state += action.payload
                break;
            default:
                this.state = this.initState
        }
    }
}

const stream$ = new Subject()

const obs1 = new Observer()
const obs2 = new Observer(42)

stream$.subscribe(obs1)
stream$.subscribe(obs2)

stream$.fire({type: 'INCREMENT'})
stream$.fire({type: 'INCREMENT'})
stream$.fire({type: 'DECREMENT'})
stream$.fire({type: 'ADD', payload: 10})

console.log(obs1.state)
console.log(obs2.state)