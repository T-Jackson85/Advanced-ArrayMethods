function hasOddNumber(arr) {
    return arr.some(function (val){
        return val % 2 !== 0; })

}


function hasAZero(num) {
    return num.some(function (value) {
        return value === 0;
    })
}

function hasOnlyOddNumbers(arr) {
    return arr.every(function (val) {
        return val % 2 !== 0;
    })
}

function hasNoDuplicates(arr) {
    return arr.every( function(val) {
        return arr.indexOf(val) === arr.lastIndexOf(val);
    })
}

function hasCertainKey(arr, key) {
    return arr.every(function (val) {
        return key in val;
    })
} 

function hasCertainValue(arr, key, searchValue) {
    return arr.every(function (value) {
        return val[key] === searchValue;
    })
}