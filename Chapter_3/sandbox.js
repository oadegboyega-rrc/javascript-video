// CONTROL FLOW - LOOP AND CONDITIONAL STATEMENT
// Loops
// Types - For loop - start with initialization(i) and a counter, a condition and final expression executed at the end of the code
// for(let i = 0; i < 5; i++){
//     console.log('in loop:', i);
// }

// console.log('loop finished');

// const names = ['shaun', 'marion', 'luigi'];
// // the process is cycling through a data
// for(let i=0; i < names.length; i++){
//     // console.log(names[i]);
//     let html = `<div>${names[i]}</div>`;
//     console.log(html);
// }


// while loops
const names = ['shaun', 'mario', 'luigi'];
// let i = 0;

// while(i < 5){
//     console.log('in loop: ', i);
//     i++;
// }
// let i = 0;

// while (i < names.length){
//     console.log(names[i]);
//     i++;
// }

// do while loops
// let i = 5;

// do{
//     console.log('val of i is: ', i);
//     i++;
// }while(i < 5);


// if statements/conditional statement
// const age = 25;

// if(age > 20){
//     console.log('you are over 20 years old');
// }

// const ninjas = ['shaun', 'ryu', 'chun-li', 'yoshi']

// if (ninjas.length > 3){
//     console.log("that's a lot of ninjas ")
// }

// const password = 'p@ss';

// if(password.length >= 12){
//     console.log('that password is mighty strong');
// } else if(password.length >= 8){
//     console.log('that password is long enough!');
// } else {
//     console.log('password is not long enough');
// }


//Logical operators - OR || and AND &&
// const password = 'p@ss12';

// if(password.length >= 12 && password.includes('@')){ //using && both statement need to be true
//     console.log('that password is mighty strong');
// } else if(password.length >= 8 || password.includes('@') && password.length >= 5){ // using || one of the statement must be true
//     console.log('that password is strong enough!');
// } else {
//     console.log('password is not strong enough');
// }

//Logical NOT(!)

// let user = false;
// if (!user){
//     console.log('you must be logged in to continue')
// }
// console.log(!true);
// console.log(!false);


// break and continue
// const scores = [50, 25, 0, 30, 100, 20, 10];

// for (let i = 0; i < scores.length; i++){

//     if(scores[i] == 0){
//         continue; //break out the current loop and continue with next iteration
//     }

//     console.log('your score: ', scores[i]);

//     if(scores[i] === 100){
//         console.log('congrat, you got the top score!');
//         break; //break us out of the loop/stop the iteration since we reach the top score
//     }
// }

// switch statements
// const grade = 'C';

// switch(grade){
//     case 'A':
//         console.log('you got an A!');
//         break;
//     case 'B':
//         console.log('you got an B!');
//         break;
//     case 'C':
//         console.log('you got an C!');
//         break;
//     case 'D':
//         console.log('you got an D!');
//         break;
//     case 'E':
//         console.log('you got an E!');
//         break;
//     default:
//         console.log('not a valid grade');
// }

// variable & block scope - global scope means the variable is outside the 
// root of the project and not within the if block
const age = 30; // global scope in the root block

if(true){
    const age = 40; // local scope for vairable age inside code block and valid for only this block
    const name = 'shaun';
    console.log('inside code block: ', age, name);

    if(true){
        const age = 50;
        console.log('inside 2nd code block: ', age);
        // var test = 'hello'; // it does not follow the block scope and that is why is not used
    }
}
// console.log('outside code block: ', age, test);


