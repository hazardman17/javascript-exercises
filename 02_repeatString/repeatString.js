const repeatString = function(string, num) {
    if(num < 0) {return 'ERROR';
}
    let myString = '';
    for(i = 0; i < num; i++) {
        myString = myString.concat(string);
    }
    return myString;
};

// Do not edit below this line
module.exports = repeatString;
