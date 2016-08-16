const moment = require('moment');
const defaults = require('./../config/defaults').hasoffers;

function hasoffers(program) {
  const params = {
    date: getDate(program.date),
    script: getScript(program.script),
  };
  console.log('hasoffers with params:');
  console.dir(params, { depth: null });
}

function getDate(dateInput) {
  if (dateInput) {
    return sanitizeDateInput(dateInput);
  }
  return defaults.date;
}

function getScript(scriptInput) {
  if (scriptInput) {
    return sanitizeScriptInput(scriptInput);
  }
  return defaults.script;
}

function sanitizeDateInput(date) {
  if (date !== moment(date).format('YYYY-MM-DD')) {
    console.log('Date must be valid and format YYYY-MM-DD');
    return process.exit(0);
  }
  return date;
}

function sanitizeScriptInput(script) {
  // if script is valid (whitelisted)
  return script;
}

module.exports = hasoffers;