// import functions
import { add } from './calculations.js';

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

//Division


// set event listeners 
addButton.addEventListener('click', ()=> {
    const add1 = Number(addInput1.value);
    const add2 = Number(addInput2.value);
    const addAnswer = add(add1, add2);
    addAnswerSpan.textContent = addAnswer;
});

subButton.addEventListener('click', () => {
    
});
  // get user input(s)
  // do any needed work with the value(s)
  // update DOM to reflect new value(s)
