class MyIterator{
    constructor(data){
        this.index = 0;
        this.data = data
    }
    [Symbol.iterator](){
        return {
            next:()=>{
                if(this.index < this.data.length){
                    return {
                        value: this.data[this.index++],
                        done:false
                    }
                }else{
                    this.index = 0
                    return {
                        value: void 0,
                        done: true
                    }
                }
            }
        }
    }
}

const iter = new MyIterator(["This","is","Sparta"])

for(let el of iter){
    console.log(el)
}

function* generator(collection){
    let index = 0
    while(index < collection.length){
        yield collection[index++]
    }
}

const gen = generator(["This","is","JS"])
console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().value)