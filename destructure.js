// destructuring is to extract values from arrays or properties from objects into distinct variables.
// It provides a concise way to unpack values from data structures.
// [array destructring]
// {object destructuring}
const numbers = [1, 2, 3, 4, 5];

// destructuring  
const [first, second, ...rest] = numbers;
console.log(first); // Output: 1
console.log(second); // Output: 2
console.log(rest); // Output: [3, 4, 5]

// we can use destructuring to swap variables
let a = 10;
let b = 20;
[a, b] = [b, a];
console.log(a); // Output: 20
console.log(b); // Output: 10
// same with array elements
const arr = [1, 2, 3];
[arr[0], arr[1]] = [arr[1], arr[0]];
console.log(arr); // Output: [2, 1, 3]

//similar with objects

// we can use destructuring to extract properties from objects into variables directly into functions parameters
function displayPerson({ name, age, gender = "Not specified" }) {
    console.log(`Name: ${name}, Age: ${age}`);
    console.log(`Gender: ${gender}`);
}

const person = {
    name: "John",
    age: 30,
    city: "New York"
}