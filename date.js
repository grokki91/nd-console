#!/usr/bin/env node

const yargs = require('yargs/yargs');
const {hideBin} = require('yargs/helpers');
const moment = require('moment');

yargs(hideBin(process.argv))
    .option('year', {
        alias: 'y',
        type: 'string',
        description: 'Get year'
    })
    .option('month', {
        alias: 'm',
        type: 'string',
        description: 'Get month'
    })
    .option('date', {
        alias: 'd',
        type: 'string',
        description: 'Get date'
    })
    .argv;


const argv = yargs.hideBin(process.argv);
const digit = argv[1];

// Current date
argv.find(command => {
    if (command === '--year' || command === '--y') {
        console.log(moment().format('YYYY'))
    } else if ((command === '--month' || command === '--m') && !digit) {
        console.log(moment().format('MM'));
    } else if (command === '--date' || command === '--d') {
        console.log(moment().format('DD-MM-YYYY'));
    }
})

argv.find(command => {
    if (command === '-d' && digit) {
        const finalDate = moment().add(digit, 'days').toISOString();
        console.log(finalDate);
    } else if (command === '--month' && digit) {
        const finalMonth = moment().add(digit, 'months').toISOString();
        console.log(finalMonth);
    }
})