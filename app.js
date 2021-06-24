// import functions
import { add } from './calculations.js';

// reference needed DOM elements
const addInput1 = document.getElementById('add-num1');
const addInput2 = document.getElementById('add-num2');
const addAnswerSpan = document.getElementById('add-answer');
const addButton = document.getElementById('add-button');

// set event listeners 
addButton.addEventListener('click', ()=> {
    const add1 = Number(addInput1.value);
    const add2 = Number(addInput2.value);
    const addAnswer = add(add1, add2);
    console.log(addAnswer);
    addAnswerSpan.textContent = addAnswer;
});
  // get user input(s)
  // do any needed work with the value(s)
  // update DOM to reflect new value(s)
