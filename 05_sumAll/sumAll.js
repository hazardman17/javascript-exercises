const sumAll = function(firstNum, secondNum) {
    let sum = 0;
    let swap = 0;

    // handle NaN
    if((typeof(firstNum) != 'number') || ((typeof(secondNum) != 'number'))) {
        return 'ERROR';
    }
    
    // handle first number bigger than second
    if(secondNum < firstNum) {
        swap = firstNum;
        firstNum = secondNum;
        secondNum = swap;
    }
    
    // handle negative numbers
    if(firstNum < 0 || secondNum < 0) {
        return 'ERROR';
    }
    
    for(i=firstNum; i<=secondNum; i++) {
        sum += i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
