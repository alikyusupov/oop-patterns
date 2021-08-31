const fs = require("fs")

const jsonToFile = (obj, filename)=>{
    fs.writeFileSync(filename+".json", JSON.stringify(obj,null,2))
}
jsonToFile({book:{author:"Name"}},"testJSONfile")