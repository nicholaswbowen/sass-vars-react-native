#!/usr/bin/env node
const convertColors = require('./convertToParsableColors').run
const renderSass = require('./convertScssToCss').run
const renderObject = require('./convertCssToObject').run
const args = process.argv.slice(2);
const convert = async (inputFile, outputFileName) => {
    let convertedColors = await convertColors(inputFile)
    let convertedCss = renderSass(convertedColors)
    renderObject(convertedCss, outputFileName)
}

convert(args[0], args[1]);