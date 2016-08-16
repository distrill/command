const moment = require('moment');

function hasoffers(program) {
    if (program.date) {
        // validate date format
        if (program.date !== moment(program.date).format('YYYY-MM-DD')) {
        return console.log('Must specify date in valid format: YYYY-MM-DD');
        }
    } else {
        program.date = moment().subtract(1, 'days').format('YYYY-MM-DD');
    }
    console.log('using date: ' + program.date);
    if (program.script) {
        console.log('run hasoffers script: ' + program.script)
    } else {
        console.log('run hasoffers, no script specified so default is hourly job whatever');
    }
}

module.exports = hasoffers;