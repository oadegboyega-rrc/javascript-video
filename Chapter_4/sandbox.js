// Function can be run many times once it is called
// function declaration
// function greet(){
//     console.log('hello there');
// }

// function expression
// const speak = function(name = 'luigi', time = 'night'){ // this line of code is know as an expressinon cos we declare a variable and pass it to a function
//     console.log(`good ${time} ${name}`);
// };
// speak();    
// // greet(); // function calling
// speak('mario', 'morning'); 

// const calcArea = function(radius){
//     let area = 3.14 * radius**2;
//     return area;
//     // console.log(area);
// };


// arrow function
// const calcArea = radius => {
//     return 3.14 * radius**2;
// };

// const area = calcArea(5);
// console.log('area is: ', area);

// practice arrow function
// const greet = function(){
//     return 'hello, world';
// }

//converting the above regular function to arrow function
// const greet = () => {
//     return 'hello, world';
// }

// const result = greet();
// console.log(result);

// const bill = function(products, tax){
//     let total = 0;
//     for(let i = 0; i < products.length; i++){
//         total += products[i] + products[i] * tax;
//     }
//     return total;
// }

// converting to arrow function
// const bill = (products, tax) =>{
//     let total = 0;
//     for(let i = 0; i < products.length; i++){
//         total += products[i] + products[i] * tax;
//     }
//     return total;
// };

// console.log(bill([10,15,30], 0.2))

// functions is a block of code to do something 
// that can be invoked and run at any point in the code

const name = 'shaun';

// functions

// const greet = () => 'hello';

// let resultOne = greet();
// console.log(resultOne);

// // methods
// let resultTwo = name.toUpperCase();
// console.log(resultTwo);

// callbacks & foreach

// const myFunc = (callbackFunc) => {
//     // do something
//     let value = 50;
//     callbackFunc(value);
// };

// myFunc(value => {
//     // do something
//     console.log(value);
// });

// callbacks and foreach
// let people = ['mario', 'luigi', 'ryu', 'shaun', 'chun-li']

// people.forEach(function(person){
//     console.log(person)
// }) // foreach is method which iterate over an array just like a loop

// // using the arrow function
// const logPerson = (person, index) =>{
//     console.log(`${index} - hello ${person}`);
// }
// people.forEach(logPerson);

// people.forEach((person, index) => {
//     console.log(index, person)
// })

//get a reference to the ul
const ul = document.querySelector('.people');

const people = ['mario', 'luigi', 'ryu', 'shaun', 'chun-li'];

let html = ``;

// people.forEach(function (person){
//     // create an html template for each person
//     html += `<li style="color: purple">${person}</li>`;
// });

// console.log(html);
// ul.innerHTML = html

people.forEach(person => {
    html += `<li style="color: purple">${person}</li>`;
});

console.log(html);
ul.innerHTML = html;