//Functions to test
const func = require("../functions/func");


//results
const addResult = func.add(2,2);
const substractResult = func.substract(8,4);
const doubleResult = func.double(4);

// using chai assert lib
const assert = require('chai').assert;

describe("Math functions",function(){
    describe("Add",function(){
        it("should add two numbers", function(){
            assert.equal(addResult, 4);
        });
        it("should return a type number", function(){
            assert.typeOf(addResult,"number")
        });
    });
    
    describe("Substract", function(){
        it("sholud substract two numbers", function(){
            assert.equal(substractResult,4);
        })
        it("should return a type number", function(){
            assert.typeOf(substractResult,"number")
        });
    });

    describe("Double", function(){
        it("should double the number provided", function(){
            assert.equal(doubleResult,8);
        })
    });

});
