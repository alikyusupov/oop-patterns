class OldCalc{
    operations(t1, t2, operation){
        switch(operation){
            case "add":return t1 + t2
            case "sub":return t1 - t2
            default: return NaN
        }
    }
}

class NewCalc{
    add(t1, t2){
        return t1 + t2
    }
    sub(t1, t2){
        return t1 - t2
    }
}

class CalcAdapter{
    constructor(){
        this.calc = new NewCalc()
    }
    operations(t1, t2, operation){
        switch(operation){
            case "add": return this.calc.add(t1, t2)
            case "sub": return this.calc.sub(t1, t2)
            default: return NaN
        }
    }
}

const calc1 = new OldCalc()
console.log(calc1.operations(10,5,"add"))

const calc2 = new NewCalc()
console.log(calc2.add(10,5))

const calc3 = new CalcAdapter()
console.log(calc3.operations(10,5,"add"))

class Engine_2{
    simpleInterface(){
        console.log("Tr tr tr...")
    }
}
class EngineV8{
    complexInterface(){
        console.log("Wroom wroom...")
    }
}
class EngineV8Adapter{
    constructor(engine){
        this.engine = engine
    }
    simpleInterface(){
        this.engine.complexInterface()
    }
}
class Auto{
    startEngine(engine){
        engine.simpleInterface()
    }
}


const myCar = new Auto()
myCar.startEngine(new Engine_2())
myCar.startEngine(new EngineV8Adapter(new EngineV8()))

class Shipping{
    doRequest(zipFrom, zipTo, weight){
        return "$49.75"
    }
}
class AdvancedShipping{
    login(creds){/* ... */}
    setStart(start){/* ... */}
    setEnd(end){/* ... */}
    calc(weight){
        return "$38.5"
    }
}
class ShippingAdapter{
    constructor(creds){
        this.creds = creds
        this.shipping = new AdvancedShipping()
        this.shipping.login()
    }
    doRequest(zipFrom, zipTo, weight){
        this.shipping.setStart(zipFrom)
        this.shipping.setEnd(zipTo)
        return this.shipping.calc(weight)
    }
}
let shipping = new Shipping();
let credentials = { token: "30a8-6ee1" };
let adapter = new ShippingAdapter(credentials);

    // original shipping object and interface

let cost = shipping.doRequest("78701", "10010", "2 lbs");
console.log("Old cost: " + cost);

    // new shipping object with adapted interface

cost = adapter.doRequest("78701", "10010", "2 lbs");

console.log("New cost: " + cost);