class User{
    constructor(name){
        this.name = name
        this.room = null
    }
    send(message, to){
        return this.room.send(message, this, to)
    }
    receive(message, from){
        return console.log(`${from.name} => ${this.name}: ${message}`)
    }
}
class Room{
    constructor(){
        this.users = {}
    }
    register(user){
        this.users[user.name] = user
        user.room = this
    }
    send(message, from, to){
        if(to){
            return to.receive(message, from)
        }else{
            Object.keys(this.users).forEach(key=>{
                if(this.users[key]!==from){
                    this.users[key].receive(message, from)
                }
            })
        }
    }
}

let alik = new User("Alik")
let bill = new User("Bill")
let tony = new User("Tony")
let jane = new User("Jane")

let room = new Room()

room.register(alik)
room.register(bill)
room.register(tony)
room.register(jane)

tony.send("HI", alik)
alik.send("Hi everybody")
jane.send("Hi everybody")