// function decalaration = define a reuseable block of code that performs specific task

// function expression  = passing function as value or variable
//for example
function hello() {
    console.log("hello");
}
setTimeout(hello, 3000); // time is in miliseconds
// OR
setTimeout(function () {
    console.log("hello");
}, 3000);

// another example= 
const numbers = [1, 2, 3, 4, 5];
const squares = numbers.map(function (element) { return Math.pow(element, 2); });
console.log(squares);