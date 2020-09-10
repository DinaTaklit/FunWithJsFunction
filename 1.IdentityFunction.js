/**
 * Write an identity function that makes an argument and returns that argument.
 *  identity(3) // 3
 * **/


 function identity(number){
     return number;
 }

console.log(identity(3));

var identity2 = function identity2(x){
    return x;
};

console.log(identity2(4));

/**
 *  Write 03 binary functions, add, sub, and mul, that thake * two numbers and return their sum, difference, and product.
 *  add(3, 4)  // 7 
 *  sub(3, 4) // -1
 *  mul(3, 4) // 12
 * **/

 function add(x,y){
     return x + y;
 }

 function sub(x,y){
     return x - y;
 }

 function mul(x,y){
     return x * y;
 }

 console.log(`add(3, 4)= ${add(3, 4)}`);
 console.log(`sub(3, 4)= ${sub(3, 4)}`);
 console.log(`mul(3, 4)= ${mul(3, 4)}`);

  /**
  * Write a function identityf that takes an argument
  * and returns a function that returns that argument 
  * var three = idetityf(3);
  * three() // 3
  * **/

 function identityf(x){
    return function(){
        return x;
    };
}

var three = identityf(3);
console.log(`three() => ${three()}`);

/**
 * Write a function addf that adds from two invocations
 * addf(3) (4) // 7
 * **/

function addf (x){
    return function(y){
        return x + y;
    };
}

console.log(`addf(3) (4) = ${addf(3) (4)}`);

/** 
 * Write a function liftf that takes a binary function,
 * and makes it callable with two invocations
 * var addf = liftf(add);
 * addf(3) (4)  // 7
 * liftf(mul) (5)(6) // 60
 * 
 * This is an example of high order function that receive other functions as parameters 
 * and return other function as results
 * **/


function liftf(binary){
    return function(x){
        return function (y){
            return binary(x, y);
        };
    };
}
var _addf = liftf(add);
console.log(`_addf(3) (4) = ${_addf(3) (4)}`);
console.log(`liftf(mul) (5)(6) = ${liftf(mul) (5)(6)}`);
