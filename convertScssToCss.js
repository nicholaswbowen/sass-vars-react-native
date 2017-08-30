const sass = require('node-sass');
const fs = require('fs');

const renderSass = (inputData) => {
  var result = sass.renderSync({
    data: inputData,
    outputStyle: 'compact',
    indentedSyntax: false
  });
  return result.css.toString();
}

module.exports = {
  run: renderSass
}