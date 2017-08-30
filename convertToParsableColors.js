const fs = require('fs')

const variableNamePattern = /\$.*:/g
const variableValuePattern = /:.*;/g
const hexColorPattern = /#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})/g

function detectVariableLine(line){
    if (variableNamePattern.test(line)){
        return true
    }else{
        return false
    }
}

function transformLine(line){
    if (detectVariableLine(line)){
        return createDummyClass(line)
    }else{
        return ''
    }
}

function createDummyClass(line){
    let varName = line
        .match(variableNamePattern)[0]
        .replace(':','')

    let varValue = line
        .match(variableValuePattern)[0]
        .replace(hexColorPattern, varName)
        .replace('!default', '')
        .replace(':','')

    let newString = `${varName}{ color: ${varValue}}`
        .replace('\$', '#')
    return newString + '\n';
}

function addParsedColors(inputFile){
    return new Promise((resolve, reject) => {
        let convertedData = fs.readFileSync(inputFile);
        const lineReader = require('readline').createInterface({
            input: require('fs').createReadStream(inputFile)
        });    
    
        lineReader.on('line',  (line) =>  {
            convertedData += transformLine(line);
        });

        lineReader.on('close', () => {
            resolve(convertedData);
        })

        lineReader.on('error', (err) =>{
            console.log(err)
            reject();
        })
    })
}

const convertColors = async (inputFile) => {
    try{
        return await addParsedColors(inputFile);
    }
    catch(err){
        console.log("lineReader failed, invalid inputFile." + err)
    }   
    
}

module.exports = {
    run: convertColors
}