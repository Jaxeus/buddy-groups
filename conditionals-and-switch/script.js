'use strict';

console.log('connected 🔦');

// Changing bgc to lightgray
document.body.style.backgroundColor = 'lightgray';

// Selecting HTML Elements
const lvlUpBtn = document.querySelector('.lvl-up-btn');
const counter = document.querySelector('.counter');

// Changing lvl up button and counter styles
lvlUpBtn.style =
  'margin: 20px 0 0 20px; color: blue; background-color: hotpink; padding: 5px 10px; border-radius: 7px; font-weight: bold; border: 2px darkgreen solid;';
counter.style =
  'display: inline-block; width: 70px; text-align: center; margin-left: 20px; padding: 5px 20px; border-radius: 5px; background-color: lightgoldenrodyellow; color: darkgreen; font-weight: bold; border: 2px blue solid;';

// Setting count as 0 so that function can change count on each click
let count = 0;

// Function for lvl-up button to increase the count of counter by one each click
function increaseCount() {
  count++;
  counter.textContent = count;
  console.log(count);
}

// Adding event listener for lvl up button through JS instead of onclick
lvlUpBtn.addEventListener('click', increaseCount);

// ! Conditional statement
