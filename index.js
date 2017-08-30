const convertColors = require('./convertToParsableColors').run
const renderSass = require('./convertScssToCss').run
const renderObject = require('./convertCssToObject').run

const convert = async (inputFile, outputFileName) => {
    let convertedColors = await convertColors(inputFile);
    let convertedCss = renderSass(convertedColors);
    renderObject(convertedCss, outputFileName);
}

convert('./_variables.scss', './reactNativecolors.js')