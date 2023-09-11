function extractValue(arr, key) {
    return arr.reduce(function(accumlator, nextName){
        accumlator.push(nextName[key]);
        return accumlator;
    }, []);
}

function vowelCount(str) {
    const vowels = "aeiou";
    return str.split('').reduce(function(accumlator, nextLetter){
        let lowercase = nextLetter.toLowerCase();
        if(vowels.indexOf(lowercase) !== -1){
            if(accumlator[lowercase]){
                accumlator[lowercase]++;
            } else {
                accumlator[lowercase] = 1;
            }
            return accumlator;
        }
    }, {});
}

function addKeyAndValue(arr, key, value) {
    return arr.reduce(function(accum, next, index){
        accum[index][key] = value;
        return accum;
    }, arr);
}

function partition(arr, callback) {
    return arr.reduce(function(accum, nextValue){
        if(callback(nextValue)){
            accum[0].push(nextValue);
        } else {
            accum[1].push(nextValue);
        }
        return accum;
    }, [ [], []]);
}