//Functions to test
const func = require("../functions/func");


const assert = require('assert');

describe("Math functions",function(){
    describe("Add",function(){
        it("should add two numbers", function(){
            assert.equal(func.add(2,2), 4);
        });
    });
    
    describe("Substract", function(){
        it("sholud substract two numbers", function(){
            assert.equal(func.substract(8,4),4);
        })
    });

    describe("Double", function(){
        it("should double the number provided", function(){
            assert.equal(func.double(4),8);
        })
    });

});
