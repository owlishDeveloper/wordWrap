'use strict';

exports.wordWrap = function(string, value, breakString) {
    console.log(value);
    console.log(string);
    const breakChar = breakString || '\n';
    const newArray = [];

  //Naive implementation
    //Split the string on each character
    const newStringArray = string.split('');

    //Traverse concat the string on the value
    let i;
    for (i=0; i< newStringArray.length; i++) {
        if (i === 0) {
            newArray.push(newStringArray[i])
        }
        else if(i%value === 0) {
            newArray.push(breakChar);
            newArray.push(newStringArray[i]);
        } else {
            newArray.push(newStringArray[i]);
        }
    }

   console.log(newArray.join(''));
};