// const title = document.querySelector('h1');

// // title.setAttribute('style', 'margin: 50px;');

// console.log(title.style) // style property of title
// console.log(title.style.color);

// title.style.margin = '50px' //to add style and not overwritting it
// title.style.color = 'crimson'; // it overwrite the color and not the margin

// title.style.fontSize = '60px';

// title.style.margin = '';

// const content = document.querySelector('p');

// console.log(content.classList);
// content.classList.add('error');
// content.classList.remove('error');
// content.classList.add('success');

const paras = document.querySelectorAll('p');

paras.forEach(p => {
    if(p.textContent.includes('error')){
        p.classList.add('error');
    }
    if(p.innerText.includes('success')){
        p.classList.add('success');
    }
});

// how to toggle a class
const title = document.querySelector('.title');

title.classList.toggle('test');


document.getElementsByClassName