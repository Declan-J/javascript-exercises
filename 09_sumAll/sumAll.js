const sumAll = function(a, b) {

    //Error Checking
    //Non-negative
    if(a < 0|| b < 0) return("ERROR");
    
    //Is a Number
    if(typeof a !== "number"  || typeof b !== "number") return("ERROR");
    
    //Is an Integer
    if(!Number.isInteger(a) || !Number.isInteger(b)) return("ERROR");

    // ------
    
    //Make b always the biggest number.
    if(b<a) {
        let temp = b;
        b = a;
        a = temp
    }

    //set acc to first number
    let acc = 0;
    //init to first number + 1 so you don't repeat first number.
    for(let i = a; i < b+1; i++)
    {
        acc += i;
    }

return acc;
};

console.log(sumAll(1, 4));


// Do not edit below this line
module.exports = sumAll;
