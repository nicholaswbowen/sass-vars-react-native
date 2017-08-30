const fs = require("fs");
const humps = require('humps');

const cssId = /#.*}/g
const variableNamePattern = /\#.*{/g
const variableValuePattern = /:.*;/g

const renderObject = (inputData, outputfile) => {
    const resultFile = fs.createWriteStream(outputfile);
    const addComma = (index) => {return index !== cssLines.length -1 ? ',' : ''};
    let cssLines = inputData.match(cssId);
    resultFile.write(`module.exports = { \n`)
    cssLines
        .forEach((line, i) => {
            let varName = line
                .match(variableNamePattern)[0]
                .replace('{', '')
                .replace('#', '')
            let varValue = line 
                .match(variableValuePattern)[0]
                .replace(':', '')
                .replace(';', '')
            resultFile.write(`${humps.camelize(varName)} : '${varValue}'${addComma(i)}`.replace(/\s/g, ''));
        })
    resultFile.write(`}`);
}
module.exports = {
    run: renderObject
  }