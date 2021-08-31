
class MyMath{
    constructor(initValue=1){
        this.initValue = initValue
    }
    squared(){
        return this.initValue**2
    }
    cubed(){
        return this.initValue**3
    }
}
class Command{
    constructor(subject){
        this.subject = subject
    }
    execute(command){
        return this.subject[command]()
    }
}
const commander = new Command(new MyMath(2))
console.log(commander.execute("squared"))
console.log(commander.execute("cubed"))