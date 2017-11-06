const fileData = require("./fileData");
const textMetrice = require("./textMetrics");
const bluebird = require("bluebird");
const fs = bluebird.promisifyAll(require("fs"));

runLab3();

async function runLab3()
{
    try{
        await main('./sam.txt');
    }catch(e){
        console.log(e);
    }
    try{
        await main('./chapter22.txt');
    }catch(e){
        console.log(e);
    }
    try{
        await main('./chapter23.txt');
    }catch(e){
        console.log(e);
    }

}

async function main(path)
{
    if(!path || !(await fs.existsSync(path)))
    {
        throw 'Need to provide valid file path';
    }

    let filePath = path.substring(0,path.lastIndexOf('.'));
    let jsonFileName = filePath +'.result.json';
    let isExists = await fs.existsSync(jsonFileName);

    if(!isExists)
    {
        let fileString = await fileData.getFileAsString(path);
        let simpleFileString =  textMetrice.simplify(fileString);

        await fileData.saveStringToFile(filePath+'.debug.txt',simpleFileString);

        let jsonFileStringObject =  textMetrice.createMetrics(simpleFileString);
        await fileData.saveJSONToFile(filePath+'.result.json',jsonFileStringObject);

        console.log(jsonFileStringObject);
    }

    else
    {
        let jsonFileStringObject = await fileData.getFileAsJSON(jsonFileName);
        console.log(jsonFileStringObject);
    }
}
