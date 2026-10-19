console.log("Hello, world!");
console.log("This is a learning JavaScript file.");

// window.alert("Welcome to the learning JavaScript file!");

document.getElementById("myH1").textContent = `Hello, JavaScript!`;

let x = 12;
console.log(x);
console.log(`The value of x is ${x}`);
console.log(typeof x);

let sleeping = false;
let Name = "Jr";
document.getElementById("myP").textContent = Name; // used script function with html
document.getElementById("myP1").textContent = `Myself ${Name}`;

let Username;
// Username = window.prompt("Whats your username?");  or can put both in one line.

// now for the input part in html, using function 
document.getElementById("Mysubmit").onclick = function () {
    Username = document.getElementById("Mytext").value;
    console.log(Username); // or
    document.getElementById("myH2").textContent = `Hello ${Username}`
}
// this is profession way , other way is to
//let age = window.prompt("how old are you?"); by the way we will also have to type convert
// our age to number(age) to make any changes to it as number.

