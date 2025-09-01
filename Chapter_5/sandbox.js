// object in JS have properties and something they can do which is method/function

//object literals notation - use curly brace to store object litera
// let user = {
//     name: 'crystal', // this is a key value pair
//     age: 30, 
//     email: 'crystal@thenetninja.co.uk',
//     location: 'berlin',
//     blogs: ['why mac & cheese rules', '10 things to make with marmite']
// };

// console.log(user);
// //ways to access and update property on an object using dot notation
// console.log(user.name)

// // user.age = 35;
// console.log(user.age);

// //anither way to access is using sqaure bracket notation

// console.log(user['name']);
// user['name'] = 'chun-li';
// console.log(user['name']);


// console.log(typeof user);

// how to add method to the object literal
// const blogs = [
//     {title: 'why mac & cheese rules', likes: 30 },
//     {title: '10 things to make with marmite', likes: 50 },
// ];

// console.log(blogs);

// let user = {
//     name: 'crystal',
//     age: 30,
//     email: 'crystal@thenetninja.co.uk',
//     location: 'berlin',
//     blogs:  [
//         {title: 'why mac & cheese rules', likes: 30 },
//         {title: '10 things to make with marmite', likes: 50 }
//     ],
//     login: function(){
//         console.log('the user logged in');
//     },
//     logout: function(){
//         console.log('the user logged out')
//     },
//     logBlogs: function(){
//         // console.log(this.blogs);
//         console.log('this user has written the following blogs:');
//         this.blogs.forEach(blog => {
//             console.log(blog.title, blog.likes);
//         })
//         // this.blogs // this is a contect object and represen the current code execued 
//     }
// };
// user.login();
// user.logout();
// user.logBlogs();
// console.log(this); // windows/ global object


// Math Object

console.log(Math);
console.log(Math.PI);
console.log(Math.E);

const area = 7.7;

console.log(Math.round(area))
console.log(Math.floor(area)) //- round it up to whole number
console.log(Math.ceil(area)) //- opposite of floor
console.log(Math.trunc(area)) 

// random numbers

const random = Math.random(); // random number is between 0 and 1

console.log(random);
console.log(Math.round(random * 100)) // wanting random number to between 1-100

// Primitive(String, number etc) and Reference type( all type of Object, arrays, function, dates)
// Primitive are stored in the stack whie Reference are store in the heap

// let scoreOne = 50;
// let scoreTwo = scoreOne;

// console.log(`scoreOne: ${scoreOne}`, `scoreTwo: ${scoreTwo}`);

// scoreOne = 100;
// console.log(`scoreOne: ${scoreOne}`, `scoreTwo: ${scoreTwo}`);

// reference value

const userOne = {name: 'ryu', age: 30};
const userTwo = userOne;

console.log(userOne, userTwo);

userOne.name = 'chun-li';
console.log(userOne, userTwo);


