function doubleValues(arr){
    let doubles = []
    Array.forEach(function(val) {
        doubles.push(val * 2);
    }); 
   return doubles;
}

function onlyEvenValues(arr){
    let evens = []
    arr.forEach(function(value){
        if(value % 2 === 0) {
        evens.push(value);
        }
    });
    return evens;
}

function showFirstAndLast(arr){
    let newArr = [];
    arr.forEach(function(val) {
        newArr.push(val[0] + val[val.length -1]);
    });

    return newArr;
}

function addKeyAndValue(arr,key,value){
    arr.forEach(function(val) {
        val[key] = value;
    });
    return arr;
    
}

function vowelCount(str){
    let splitArr = str.split("");
    let object = [];
    const vowels = 'aeiou';

    splitArr.forEach(function(char) {
        let lowerCaseLetter = char.toLowerCase();
        if (vowels.indexOf(lowerCaseLetter) !== -1){
            if (object[lowerCaseLetter]) {
                object[lowerCaseLetter]++;
            }
            else {
                object[lowerCaseLetter] = 1;
            }
        }

    });
    return object;

   
}
function doubleValuesWithMap(arr) {
    arr.map(function(value){
        return val * 2;
    });
}

function valTimesIndex(arr){
    return arr.map(function(val, idx){
        return val * idx;

});

}

function extractKey(arr, key){
    return arr.map(function(val, key){
        return val[key];
    });
}

function extractFullName(arr){
    return  arr.map(function(val){
     return val.first + " " + val.last;
     });
     
 }

 function filterByValue(arr, key) {
    return arr.filter(function(val) {
    return val[key] !== undefined;
    });
}

function find(arr, searchValue) {
    return arr.filter(function(val){
        return val === searchValue;
    }) [0];
}

function findInObj(arr, key, searchValue) {
    return arr.filter(function(val){
        return val[key] === searchValue;
    })[0];
}

function removeVowels(str) {
    const vowels = "aeiou";
    return str
    .toLowerCase()
    .split("")
    .filter(function(val){
        return vowels.indexOf(val) === -1;
    })
    .join("");

}

function doubleOddNumbers(arr) {
    return arr.filter(function(val){
        return val % 2 !== 0;
    })
    .map(function(val){
        return val * 2;
    });
}

