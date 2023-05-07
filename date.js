#!/usr/bin/env node
const moment = require('moment');
const yargs = require('yargs/yargs');
const arg = yargs.hideBin(process.argv);
const digit = arg[2];
const dateFlag = (arg.includes('--date') || arg.includes('-d'));
const monthFlag = (arg.includes('--month') || arg.includes('-m'));
const yearFlag = (arg.includes('--year') || arg.includes('-y'));
const isDate = digit && dateFlag;
const isMonth = digit && monthFlag;
const isYear = digit && yearFlag;

const argv = require('yargs')
  .command('current', '', function(yargs) {
    if (dateFlag) {
        console.log(moment().format('DD-MM-YYYY'));
    } else if (monthFlag) {
        console.log(moment().month());
    } else if (yearFlag) {
        console.log(moment().format('YYYY'));
    } else if (arg.length === 1) {
        console.log(moment().toISOString());
    }
  })
  .command('add', '', function(yargs) {
    if (isDate) {
        console.log(moment().add(digit, 'days').toISOString());
    } else if (isMonth) {
        console.log(moment().add(digit, 'months').toISOString());
    } else if (isYear) {
        console.log(moment().add(digit, 'years').toISOString());
    }
  })
  .command('sub', '', function(yargs) {
    if (isDate) {
        console.log(moment().subtract(digit, 'days').toISOString());
    } else if (isMonth) {
        console.log(moment().subtract(digit, 'months').toISOString());
    } else if (isYear) {
        console.log(moment().subtract(digit, 'years').toISOString());
    }
  }).option('year', {
    alias: 'y',
  }).option('month', {
    alias: 'm'
  }).option('date', {
    alias: 'd'
  })
  .argv;