class MySum{
    constructor(){
        this.sum = 0
    }
    add(value){
        this.sum += value
        return this
    }
    sub(value){
        this.sum -= value
        return this
    }
    multiply(value){
        this.sum *= value
        return this
    }
    divide(value){
        this.sum /= value
        return this
    }
}

const result = new MySum()
console.log(result.add(8).sub(2).multiply(3).divide(4).sum)


//========================================================


class Account{
    pay(amount){
        if(this.canPay(amount)){
            console.log(`${this.name} is valid for payment`)
        }else if(this.incomer){
            this.incomer.pay(amount)
        }else{
            console.log("Fail to pay!")
        }
    }
    canPay(amount){
        return this.balance >= amount
    }
    setNext(account){
        return this.incomer = account
    }
}
class MasterCard extends Account{
    constructor(balance){
        super()
        this.name = "MasterCard"
        this.balance = balance
    }
}
class PayPal extends Account{
    constructor(balance){
        super()
        this.name = "PayPal"
        this.balance = balance
    }
}
class Qiwi extends Account{
    constructor(balance){
        super()
        this.name = "Qiwi"
        this.balance = balance
    }
}

const master = new MasterCard(100)
const paypal = new PayPal(200)
const qiwi = new Qiwi(500)

master.setNext(paypal)
paypal.setNext(qiwi)

master.pay(500)

const Request = function(amount){
    this.amount = amount;
    console.log("Starting dispense...")
}

Request.prototype.get = function(bill){
    const count = Math.floor(this.amount/bill)
    this.amount -= count*bill
    console.log("Dispense " + count + " $" + bill + " bills")
    return this
}

const run = ()=>{
    const request = new Request(350)
    request.get(100).get(50).get(5)
}
run()