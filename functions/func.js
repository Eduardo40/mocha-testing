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

module.exports = exports;