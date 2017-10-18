exports.add = function(x, y) {
    return x + y;
}

exports.double = function(x){
    return x * 2
}

exports.substract = function(x,y){
    return x-y;
}

exports.greet = (name) =>{
    return `${name} says hi!.`;
}

exports.concat = (word1, word2) =>{
    return word1 + word2;
}

exports.repeatWord = function (word,numTimes){
    let result = '';
    for(let i=0;i<numTimes;i++){
        result += `${word}\n`;
    }
    return result;
}

module.exports = exports;