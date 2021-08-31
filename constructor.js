function Server(name, ip){
    this.name = name;
    this.ip = ip;
}

Server.prototype.getURL = function(){
    return `${this.name} ${this.ip}`
}


const server = new Server("aws", "82.225.225.245")
console.log(server.getURL())
