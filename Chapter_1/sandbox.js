// console.log is a function we use to log value into the console
// console.log(1);
// console.log(2);

//variables - let, var and const(this is constant and cannot be overwrite)
// in naming variable use the camel casing e.g myAge
// variable can contain only letters, underscore, dollar but cannot start with number
// reserve key words in js cannot be used for variable name
// let age = 25;
// let year = 2009;

// console.log(age, year);

// age = 30;
// console.log(age);

// const points = 100;
// console.log(points);

// var score = 75; // var is an old version of declaring variable
// console.log(score);

// javascript DataType: Number, String, Boolean, Null, Undefined, Object(arrays, dates, literals), Symbol.
//strings
console.log('hello, world');

let email = 'mario@thenetnaija.co.uk';
console.log(email);

// string concatenation
let firstName = 'Brandon';
let lastName = 'Sanderson';

let fullName = firstName + ' ' +lastName;
console.log(fullName);

// getting characters
console.log(fullName[2])

// string length
console.log(fullName.length);

// Function is a snippet of code which performs some kind of specific task
// A method is just a function that is associated with a particular object or data type. eg toUpperCase()

// string methods 
console.log(fullName.toUpperCase());
let result = fullName.toLowerCase();
console.log(result, fullName);

let index = email.indexOf('@'); // this is an argument/parameter
console.log(index)

