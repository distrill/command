const program = require('commander');
const moment = require('moment');

const init = require('./commands/init');
const hasoffers = require('./commands/hasoffers');
const facebook = require('./commands/facebook');

program
  .version('0.0.1');

program
  .option('-d --date <date>', 'Specify a date for the script, format YYYY-MM-DD');

// init
program
  .command('init')
  .description('initialize cl-edgar: install edgar, set up cron jobs, configure $PATH')
  .action(() => {
    init();
  });

// hasoffers
program
  .command('hasoffers [script]')
  .description('run hasoffers script')
  .action((script) => {
    hasoffers(Object.assign(program, { script: script }));
  });

program
  .parse(process.argv);