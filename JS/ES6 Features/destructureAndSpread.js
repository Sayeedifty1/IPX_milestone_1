//example of destructuring array

const person = { name: 'Denice', age: 20 };
const { name, age } = person;
console.log(name); // Output: 'Denice'


//example of spread operator

const arr = [1, 2, 3];
const arr2 = [...arr];
arr2.push(4);
console.log(arr2); // Output: [1, 2, 3, 4]
