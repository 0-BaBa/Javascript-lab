// ARROW FUNCTIONS = a concise way to write functions expressions 
//                   good for simple functions we only use once 
//                  (parameter) => some code

const hello = (name) => console.log(`Hello ${name}`);

hello("Jaat");

// example with function expression =
setTimeout(() => console.log("hello"), 2000);