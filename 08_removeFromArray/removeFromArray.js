const removeFromArray = function(arr, ...element) {
    let array = [];
    for(let i = 0; i<arr.length; i++) {
        if(element.includes(arr[i])) continue;
            else {
                array.push(arr[i])
        }
    }
    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
