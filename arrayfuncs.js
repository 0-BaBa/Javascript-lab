// CALLBACK 

add(displayresult, 2, 3); // calling a function with callback as another function 

function add(callback, x, y) {
    let result = x + y;
    callback(result);
}
function displayresult(result) {
    console.log(result);
}


// FOREACH()

let numbers = [1, 2, 3, 4];

// callback of function
numbers.forEach(printing);
numbers.forEach(doubling);

function printing(element) {   // here element is provided by foreach method, it also provides us with array and index.
    console.log(element);
}

function doubling(array, index, element) {
    array[index] = element * 2;
}

// theres also a .map() method that accepts a callback and applies it to each element of array


const doubles = numbers.map(double);
console.log(doubles); //will  print new array
// A useful little program with this- 
// we will split and change the order of dates.

const dates = ["2026-10-2", "2026-04-3"];
const newdates = dates.map(ordering);

console.log(newdates);

function ordering(element) {
    const parts = element.split('-');  // made little array after split
    return `${parts[2]}/${parts[1]}/${parts[0]}`;
}


// .filter() method which filters based on boolean values 
let evenNums = numbers.filter(evenNum);
console.log(evenNums);

function evenNum(element) {
    return element % 2 === 0; // return boolean value
}