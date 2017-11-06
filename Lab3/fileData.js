const bluebird = require("bluebird");
const fs = bluebird.promisifyAll(require("fs"));

module.exports = {
    description: "This is a Lab3 Assignment for CS-546",
    async getFileAsString(path)
    {
        if(!path)
        {
            throw 'Need to provide file path';
        }
        const fileContent = await fs.readFileAsync(path, "utf-8");
        return fileContent;
    },
    async getFileAsJSON(path)
    {
        if(!path)
        {
            throw 'Need to provide file path';
        }
        const fileContent = await fs.readFileAsync(path, "utf-8");
        try
        {
        let fileJSON = JSON.parse(fileContent);
        return fileJSON;
        }catch(e){
            console.log(e);
            throw 'File '+path +' does not contains valid JSON';
        }
        
    },
    
    async saveStringToFile(path, text)
    {
        if(!path || typeof text !== 'string')
        {
            throw 'Not valid path or text';
        }
        let op = await fs.writeFileAsync(path, text);
        return op;
    },
    
    async saveJSONToFile(path, obj)
    {
        if(!path || typeof obj !== 'object')
        {
            throw 'Not valid path or object';
        }
        try{
            let jsonString = JSON.stringify(obj);
            let op = await fs.writeFileAsync(path, jsonString);
            return op;
        }catch(e)
        {
            console.log(e);
            throw 'Invalid object to convert to JSON';
        }
        
        
    }

};


