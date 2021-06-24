// import functions
import { add } from './calculations.js';
import { sub } from './calculations.js';
import { mult } from './calculations.js';


// reference needed DOM elements
//Add
const addInput1 = document.getElementById('add-num1');
const addInput2 = document.getElementById('add-num2');
const addAnswerSpan = document.getElementById('add-answer');
const addButton = document.getElementById('add-button');

//Subtraction
const subInput1 = document.getElementById('sub-num1');
const subInput2 = document.getElementById('sub-num2');
const subAnswerSpan = document.getElementById('sub-answer');
const subButton = document.getElementById('sub-button');


//Multiplication
const multInput1 = document.getElementById('mult-num1');
const multInput2 = document.getElementById('mult-num2');
const multAnswerSpan = document.getElementById('mult-answer');
const multButton = document.getElementById('mult-button');


//Division


// set event listeners 
addButton.addEventListener('click', ()=> {
    const add1 = Number(addInput1.value);
    const add2 = Number(addInput2.value);
    const addAnswer = add(add1, add2);
    addAnswerSpan.textContent = addAnswer;
});
  
subButton.addEventListener('click', () => {
    const sub1 = Number(subInput1.value);
    const sub2 = Number(subInput2.value);
    const subAnswer = sub(sub1, sub2);
    subAnswerSpan.textContent = subAnswer;
});
  
multButton.addEventListener('click', ()=>{
    const mult1 = Number(multInput1.value);
    const mult2 = Number(multInput2.value);
    const multAnswer = mult(mult1, mult2);
    multAnswerSpan.textContent = multAnswer;
});
  // get user input(s)
  // do any needed work with the value(s)
  // update DOM to reflect new value(s)
