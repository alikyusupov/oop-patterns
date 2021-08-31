function networkFetch(url){
    return `Server response - ${url}`
}

const cache = new Set()

const proxiedFn = new Proxy(networkFetch,{
    apply(target, thisArg, args){
        const url = args[0]
        if(cache.has(url))
            return `Cache response ${url}`
        cache.add(url)
        return Reflect.apply(target, thisArg, args)
    }
})

console.log(proxiedFn("angular.io"))
console.log(proxiedFn("angular.io"))

class CarAccess{
    open(){
        return console.log("Door is opening...")
    }
}
class SecureAccess{
    constructor(door){
        this.door = door
    }
    open(password){
        if(this.isAuth(password))
            return this.door.open()
        console.log("Access denied")
    }
    isAuth(password){
        return password === "Ilon"
    }
}

const secureDoor = new SecureAccess(new CarAccess())
secureDoor.open("Jack")
secureDoor.open("Ilon")