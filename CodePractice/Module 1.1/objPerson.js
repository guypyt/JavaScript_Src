// Objects
// Instruction:
// - Create an object person with properties: name (a string), age (a number), and
// isStudent (a boolean).
// 7.1 Add a new property hobbies, an array of strings, to the person object.
// 7.2 Change the age property to a new value.
// 7.3 Delete the isStudent property.
// Initiate code:
// Insert your code here
let person = {
  name: "Guy",
  age: 100,
  isStudent: true,
};

// 7.1
person.hobbies = ["eating", "coding", "sleeping"];

// 7.2
person.age = 20;

// 7.3
delete person.isStudent;

console.log(person);
