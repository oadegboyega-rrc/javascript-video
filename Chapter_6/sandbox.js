// Interacting with Browser
// let para = document.querySelector('p'); // querySelector is to select single element

// console.log(para); 

// const para = document.querySelector('.error');
// console.log(para);

// const para = document.querySelector('body > h1');
// console.log(para);

// const paras = document.querySelectorAll('p'); // querySelectorAll is to select all element
// const errors = document.querySelectorAll('.error');
// console.log(errors);

// paras.forEach(para => {
//     console.log(para);
// });
// console.log(paras[2]);


//get an element ID
// const title = document.getElementById('page-title');
// console.log(title);

// // get elements by thier class name
// const errors = document.getElementsByClassName('error');
// console.log(errors);

// NOTE: While we use the querySelectorAll, we have a nodelist output and we can use the forEach method for it
// but for the getElementById, we cannot use the forEach method.

// get eleemtns by their tag name
// const paras = document.getElementsByTagName('p');
// console.log(paras);

// const para = document.querySelector('p');

// console.log(para.innerText);
// para.innerText = 'Ninjas are awesome'; // this replace the original text
// para.innerText += ' Ninjas are awesome'; // to append to the text

// const paras = document.querySelectorAll('p');
// paras.forEach(para =>{
//     console.log(para.innerText);
//     para.innerText += ' new text';
// });

// const content = document.querySelector('.content')

// console.log(content.innerHTML); 
// content.innerHTML += '<H2>THIS IS A NEW H2</H2>';

// const people = ['mario', 'luigi', 'yoshi'];

// people.forEach(person => {
//     content.innerHTML += `<p>${person}</p>`;
// });


// const link = document.querySelector('a');

// console.log(link.getAttribute('href'));
// link.setAttribute('href', 'https://www.thenetninja.co.uk');
// link.innerText = 'TheNet Ninja Website';

// const mssg = document.querySelector('p');

// console.log(mssg.getAttribute('class'));
// mssg.setAttribute('class', 'success');
// mssg.setAttribute('style', 'color:red'); // - set attribute is use to set the style attribute from the html

