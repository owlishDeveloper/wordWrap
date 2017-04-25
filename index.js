'use strict'
const fs = require('fs');
const path = require('path');
const wordWrap = require('./lib/word_wrap').wordWrap;

/**
 * This function is expected to take a string and a integer, and output a new string which wraps the string
 * at the given number of characters
 * For Example, given a value of 5, every 5th character must wrap and start a new line
 */

//Insert string from file and value from command line
const stringFile = process.argv[2];
const value = process.argv[3];
const breakString = process.argv[4];

const stringContents = fs.readFileSync(`${__dirname}/${stringFile}`, 'utf8');

wordWrap(stringContents, value, breakString);



