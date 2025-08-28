// common string methods

// let email = 'mario@thenetninja.co.uk';

// let result = email.lastIndexOf('n');

// slice - slice a section of the string. indicate the start point(starting index) and the end point of the slice(ending index)
// let result = email.slice(2, 5);

// substr same as slice  
// let result = email.substr(4, 10);

//Replace - replacing a character
// let result = email.replace('m', 'w');
// let result = email.replace('n', 'w');

// console.log(result);

// NUMBER DATATYPE
// let radius = 10;
// const pi = 3.14;

// console.log(radius, pi);

//math operators +, -, *, /, **, %

// console.log(10/2);
// let result = radius % 3;
// let result = pi * radius**2;

//order of operations - B I D M A S

// let result = 5 * (10-3)**2;

// console.log(result);

// let likes = 10;
// likes = likes + 1
// likes++; //short form to add
// likes--;
// short hand form of the operators
// likes +=10;
// likes -=5;
// likes *=2;
// likes /=2;
// console.log(likes);

// NaN - not a Number
// console.log(5 / 'hello');

// Concatinate numbers
// let result = 'the blog has ' + likes + ' likes';
// console.log(result);

// template strings
const title = 'Best reads of 2019';
const author = 'Mario';
const likes = 30;

// concatenation way
// let result = 'The blog called ' + title + ' by ' + author + ' has ' + likes + ' likes.';

// console.log(result);

// template string way or template literal
// let result = `The blog called ${title} by ${author} has ${likes} likes`;
// console.log(result);

// // creating html templates
// let html = `
//     <h2>${title}</h2>
//     <p>By ${author}</p>
//     <span>This blog has ${likes} likes</span>
// `;

// console.log(html);

let ninjas = ['shaun', 'ryu', 'chun-li'];

// ninjas[1] = 'ken';

// console.log(ninjas[1])

// let ages = [20, 25,30,35];
// console.log(ages[2]);

// let random = ['shaun', 'crystal', 30, 20];
// console.log(random);

// console.log(ninjas.length);

//ARRAY METHODS
// let result = ninjas.join(',');
// let result = ninjas.indexOf('chun-li')
// let result = ninjas.concat(['ken', 'crystal']);
// let result = ninjas.push('ken'); //alters the original value and called destructive method 
// result = ninjas.pop(); // - take off the end value.

// console.log(result);


//  UNDEFINED 
// let age;

// console.log(age, age + 3, `the age is ${age}`)

//NULL 
// let age = null;

// console.log(age, age + 3, `the age is ${age}`)

// Boolean and comparisons
console.log(true, false, 'true','false');

// methods can return booleans
let email = 'luigi@thenetninja.co.uk';
let names = ['mario', 'luigi', 'toad'];

// let result = email.includes('@')
// let result = names.includes('bow');
// console.log(result);

// comparison operators
// let age = 25;

// console.log(age == 25);  // '=' means set values, while == means equal
// console.log(age == 30);  
// console.log(age != 30);  
// console.log(age > 20);  
// console.log(age < 20);  
// console.log(age <= 25);  
// console.log(age >= 25);  

// let name = 'shaun';

// console.log(name == 'shaun')
// console.log(name == 'Shaun')
// console.log(name > 'crystal')
// console.log(name > 'Shaun') // lowercase letter is less than Uppercase letter
// console.log(name > 'Crystal')


let age = 25;

//loose comparison (different types an still be qual)

// console.log(age == 25); // == is a loose comparison
// console.log(age == '25');
// console.log(age != 25);
// console.log(age != '25');

//strict comparison (different types cannot be equal)

// console.log(age === 25); // === is a strict comparison
// console.log(age === '25') // 25 is a string and the sign is strict so there wont be type conversion
// console.log(age !== 25);
// console.log(age !== '25')

// TYPE CONVERSION
let score = '100';

// score = Number(score)
// console.log(score + 1);
// console.log(typeof score); // to check the datatype 

// let result = Number ('hello');
// let result = String(50)
// let result = Boolean(0);
// let result = Boolean('')

console.log(result, typeof result);

