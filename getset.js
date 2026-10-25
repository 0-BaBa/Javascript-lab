// getter = special method the makes a property readable
// setter = special method that makes a property writeable

// validate and modify a value while reading or writing
class Rectangle {

    constructor(width, height) {
        this.height = height;
        this.width = width;
    }
    set width(newwidth) {
        if (newwidth > 0) {
            this._width = newwidth;   // underscore prefix if for telling other developers that it is a private property and you should interfere with it
        } else {
            console.error("Width must be positve number");
        }
    }
    set height(newheight) {
        if (newheight > 0) {
            this._height = newheight;   // underscore prefix if for telling other developers that it is a private property and you should interfere with it
        } else {
            console.error("height must be positve number");
        }
    }

    // Now even though rectangle2 have valid arguments it shows undefined , now we will use getters
    get width() {
        return this._width; // for rectangle1 it will return undefined because the value is not set due to invalid argument
    }
    get height() {
        return this._height;
    }
    get area() {
        return this._height * this._width;  // now we can use this getter as an property
    }
}

const rectangle1 = new Rectangle(-1000, "bullshit");
const rectangle2 = new Rectangle(2, 3);

console.log(rectangle1.width);
console.log(rectangle1.height);

console.log(rectangle2.width);
console.log(rectangle2.height);
console.log(rectangle2.area);


/*
||
 \\
  ||
  */


// Another example
class Person {
    constructor(firstName, lastName, age) {
        // We use the setters here to ensure validation rules are applied during instantiation
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    // --- firstName Getter & Setter ---
    get firstName() {
        return this._firstName;
    }

    set firstName(newFirstName) {
        if (typeof newFirstName === "string" && newFirstName.length > 0) {
            this._firstName = newFirstName;
        } else {
            console.error("First name must be a non-empty string.");
        }
    }

    // --- lastName Getter & Setter ---
    get lastName() {
        return this._lastName;
    }

    set lastName(newLastName) {
        if (typeof newLastName === "string" && newLastName.length > 0) {
            this._lastName = newLastName;
        } else {
            console.error("Last name must be a non-empty string.");
        }
    }

    // --- age Getter & Setter ---
    get age() {
        return this._age;
    }

    set age(newAge) {
        if (typeof newAge === "number" && newAge > 0) {
            this._age = newAge;
        } else {
            console.error("Age must be a positive number.");
        }
    }
}


const invalidPerson = new Person(420, 69, "pizza");
// This will trigger all three validation errors in the console!

const person = new Person("John", "Doe", 30);

// Accessing properties via the getters
console.log(person.firstName); // Output: John
console.log(person.lastName);  // Output: Doe
console.log(person.age);       // Output: 30


