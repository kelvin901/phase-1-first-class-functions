function receivesAFunction(callback) {
  // call the callback function
  callback();
}

receivesAFunction(function() {
  console.log("This is a callback function.");
});

function returnsANamedFunction() {
    // Define the named function to be returned
    function namedFunction() {
      console.log("This is a named function");
    }
    
    // Return the named function
    return namedFunction;
  }
  
  // Call the returnsANamedFunction function to get the named function
  const myFunction = returnsANamedFunction();
  
  // Call the named function returned from returnsANamedFunction
  myFunction(); // Output: "This is a named function"

  function returnsAnAnonymousFunction() {
    return function() {
      console.log("Hello from the anonymous function!");
    };
  }
  const myFunc = returnsAnAnonymousFunction();
  myFunc(); // logs "Hello from the anonymous function!"
  