const path = require('path');
const fs = require('fs');

function init() {
  console.log('this will initialize cl-edgar');
  const clEdarPath = path.join(__dirname, '/../', 'cl-edgar.js');
  const alias = 'alias cl-edgar="node ' + clEdarPath;
  console.log(alias);
}

module.exports = init;
