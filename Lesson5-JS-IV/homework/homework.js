// Do not change any of the function names

function multiplyArguments() {
  // use the arguments keyword to multiply all of the arguments together and return the product
  // if no arguments are passed in return 0
  // if one argument is passed in just return it
   let product = 1 ;
  if (arguments.length <= 0 ) {
    return 0;
  } else if (arguments.length == 1) {
   return arguments[0];
  } else {
    for (var i = 0; i < arguments.length; i++){
      product = product * arguments[i];
    }
  }
  return product;
      
 }
      
 


    


 

function invokeCallback(cb) {   // this works
  // invoke cb
  return cb();
}

function sumArray(numbers, cb) {   // this works
  // sum up all of the integers in the numbers array
  // pass the result to cb
  // no return is necessary
  let sum  = numbers.reduce((a, b) => {
    return a + b;
   
  });
  return cb(sum);
  
}

function forEach(arr, cb) {         // this works
  // iterate over arr and pass its values to cb one by one
  // hint: you will be invoking cb multiple times (once for each value in the array)
  arr.forEach((item, index) => {
    return cb(item);
  });
}

function map(arr, cb) {            // this works
  // create a new array
  // iterate over each value in arr, pass it to cb, then place the value returned from cb into the new arr
  // the new array should be the same length as the array argument
  let newArray = [];
  arr.map((item, index) => {
    newArray.push(cb(item));
    
  });
    return newArray;
  }


function createUserClass() {      // this works
  // create a class constructor called User
  // it should accept an options object with username, name, email, and password properties
  // in the constructor set the username, name, email, and password properties
  // the constructor should have a method 'sayHi' on its prototype that returns the string 'Hello, my name is {{name}}'
  // {{name}} should be the name set on each instance
  // return the constructor
  let User = function(options) {
    this.username = options.username;
    this.name = options.name;
    this.email = options.email;
    this.password = options.password;
    this.sayHi = function() {
      return 'Hello, my name is `{{this.name}}`';
    };
   
  };
  return User;
}

function addPrototypeMethod(Constructor) {     // this works
  // add a method to the constructor's prototype
  // the method should be called 'sayHi' and should return the string 'Hello World!'
  Constructor.prototype.sayHi = function() {
    return 'Hello World!';
  };
 
}

// !! This is the end of the homework exercises !!





// !! ------------------ !! 
/* The following exercises are extra credit, they are not required as part of the homework. In order to solve these problems you will need
   to independantly study the concepts of Closure, and Recursion. There are links in the main README file to strt you on your journey. 
   If you want to attempt these exercises, you will need to access the test.js file in the tests folder, and uncomment the tests pertaining 
   to the exercise you are attempting. Good luck! */


function addReverseString() {
  // add a method to the string constructor's prototype that returns a reversed copy of the string
  // name this method reverse
  // hint:
  // you will need to use 'this' inside of reverse
}

function nFactorial(n) {
  // return the factorial for n
  // solve this recursively
  // example:
  // the factorial of 3 is 6 (3 * 2 * 1)
}

function cacheFunction(cb) {
  // Extra Credit
  // use closure to create a cache for the cb function
  // the function that you return should accept a single argument and invoke cb with that argument
  // when the function you return is invoked with an argument it should save that argument and its result
  // when the function you return is called again with an argument that it has seen before it should not call cb
  // but should instead directly returned the previous result
  // example:
  // cb -> function(x) { return x * x; }
  // if the function you return is invoked with 5 it would pass 5 to cb(5) and return 25
  // if the function you return is invoked again with 5 it will look on an object in the closure scope
  // and return 25 directly and will not invoke cb again
}

// Do not modify code below this line.
// --------------------------------

module.exports = {
  multiplyArguments: multiplyArguments,
  invokeCallback: invokeCallback,
  sumArray: sumArray,
  forEach: forEach,
  map: map,
  createUserClass: createUserClass,
  addPrototypeMethod: addPrototypeMethod,
  addReverseString: addReverseString,
  nFactorial: nFactorial,
  cacheFunction: cacheFunction
};
