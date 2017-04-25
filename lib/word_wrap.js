'use strict';

exports.wordWrap = function(string, value, breakString) {
    // Overall this is a good solution
    // Maybe you might consider not creating another array + looping through the whole array,
    // but i+=value instead and checking the string value at the beginning
    // (not to do excess work in case the string is very long, and not to take up memory with two possibly large arrays)
    
    
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

   // The function should return the string
    console.log(newArray.join(''));
};
