# Objects
In JavaScript, almost "everything" is an object.

-  Booleans can be objects (if defined with the new keyword)

- Numbers can be objects (if defined with the new keyword)

- Strings can be objects (if defined with the new keyword)

- Dates are always objects

- Maths are always objects

- Regular expressions are always objects

- Arrays are always objects

- Functions are always objects

- Objects are always objects

All JavaScript values, except primitives, are objects.

Objects are variables too. But objects can contain many values.

The values are written as key : value pairs (key and value separated by a colon).

Example:
```js
var person = {  
                firstName:"John", 
                lastName:"Doe", 
                age:50, 
                eyeColor:"blue"
            };
```

A function can be used as an object property:
```javascript
const objectWithFunction = {
  name: "Swapnil", // We can omit the " " in keys but for string values it is necessary
  rollno: 76, // We assign any type to keys
  getfull: function () { // Don't use arrow function here as arrow functions don't have this property
    console.log(`${this.name} ${this.rollno}`);
  }
};

console.log(objectWithFunction);
// Output { name: 'Swapnil', rollno: 76, getfull: [Function: getfull] }

objectWithFunction.getfull(); // Output Swapnil 76
```

Object property values can be changed using dot notation:
```javascript
const a = {
  name: "Swapnil", // We can omit the " " in keys but for string values it is necessary
  rollno: 76 // We assign any type to keys
};

a.name = "Swapnil Satish Shinde"; // This way we can change a particular property of object

console.log(a.name); // This way you can get the value of particular element
// Output Swapnil Satish Shinde
```

New properties can be added to an object after its creation:
```javascript
const canAddValue = { // This is normal object having 2 keys name and rollno
  name: "Swapnil",
  rollno: 76
};

// We can add the keys we want any time into the object by directly assigning value to it
canAddValue.branch = "Computer";

console.log(canAddValue);
// Output { name: 'Swapnil', rollno: 76, branch: 'Computer' }
```

Value of a property(key) can be accessed and can be changed using __Dot Notation__ or __Bracket Notation__. 

```javascript
const student = {
  name: "Franc",
  age: 21
};

console.log(student.name); // dot notation
console.log(student['name']); // bracket notation

student['age'] = 22; // updates student age to 22
console.log(student);

```
Property of an object can be removed using **delete** keyword. _Note: Dot Notation or Bracket Notation can also be used._

```javascript
const student = {
  name: "Franc",
  age: 21,
  birthyear: 1998
};
console.log(student);
delete student.age; // removes age property
delete student['birthyear']; // removes birthyear property
console.log(student); // prints with only name as property

```