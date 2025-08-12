'use strict';

console.log('connected 🔦');

// ~ Changing bgc to light-grey
document.body.style.backgroundColor = 'rgb(238, 238, 238)';

// ~ Selecting HTML Elements
const lvlUpBtn = document.querySelector('.lvl-up-btn');
const counter = document.querySelector('.counter');
const modeBtn = document.querySelector('.mode-btn');
const counterDisplay = document.querySelector('.counter-display');
const loopDisplay = document.querySelector('.loop-display');

// ~ Changing lvl up button and counter styles
lvlUpBtn.style =
  'color: blue; background-color: hotpink; padding: 5px 10px; border-radius: 7px; font-weight: bold; border: 2px darkgreen solid;';
counter.style =
  'display: inline-block; width: 70px; text-align: center;  padding: 5px 20px; border-radius: 5px; background-color: lightgoldenrodyellow; color: darkgreen; font-weight: bold; border: 2px blue solid;';

// ~ Setting count as 0 so that function can change count on each click
let count = 0;

// ~ Function for lvl-up button to increase the count of counter by one each click
function increaseCount() {
  count === 5 ? (count = 0) : count++;
  // ~ If count === 5 ? (then perform) : otherwise perform this
  // ! Ternary
  counter.textContent = count;

  console.log('Count is:', count);

  // ! Switch
  switch (count) {
    case 0:
      counterDisplay.style.backgroundColor = 'white';
      break;

    case 1:
      counterDisplay.style.backgroundColor = 'lime';
      break;

    case 2:
      counterDisplay.style.backgroundColor = 'salmon';
      break;

    case 3:
      counterDisplay.style.backgroundColor = 'violet';
      break;

    case 4:
      counterDisplay.style.backgroundColor = 'yellow';
      break;

    case 5:
      counterDisplay.style.backgroundColor = 'aqua';
      break;

    default:
      console.log('Switch not working!');
  }
}

// ~ Adding event listener for lvl up button through JS instead of onclick
lvlUpBtn.addEventListener('click', increaseCount);

// ? Dark-mode: #3b3b3b Light-mode: #eeeeee
const darkMode = 'rgb(59, 59, 59)';
const lightMode = 'rgb(238, 238, 238)';

// ! Conditional statements

// * Dark-mode/Light-mode

let isDarkMode = false;

const toggleMode = () => {
  console.log('Mode Button hit');

  isDarkMode = !isDarkMode;
  console.log(isDarkMode);

  if (isDarkMode) {
    document.body.style.backgroundColor = darkMode;
    modeBtn.style = 'background-color: white; color: black;';
    modeBtn.textContent = 'I LIKE IT BRIGHT 💡';
  } else {
    document.body.style.backgroundColor = lightMode;
    modeBtn.style =
      'margin-right: 30px; padding: 5px 20px; border-radius: 7px; font-weight: bold; background-color: black;color: white; border: 2px darkgreen solid;';
    modeBtn.textContent = 'AAHH MY EYES!! 😵';
  }
};

modeBtn.addEventListener('click', toggleMode);

// ! Loop Container and Display

// ~ Creating an array of the colours the switch statement above cycles through when the LVL UP button is clicked.
const colourArrayToLoop = [
  'white',
  'lime',
  'salmon',
  'violet',
  'yellow',
  'aqua',
];

// ~ Initialising colourList to an empty string so that when we include colourList in a loop, we can add some paragraph after paragraph (HTML) into this string
let colourList = '';

// ! For Loop - <button> - comment/uncomment to show array colours in box
for (let i = 0; i < colourArrayToLoop.length; i++) {
  colourList += `<button style=
  'display: inline;
  cursor: pointer;
  background-color: ${colourArrayToLoop[i]};
  padding: 5px 10px;
  border: solid 1px black;'
  >${colourArrayToLoop[i]}</button><br/>`;
}

// ! While Loop - <p> - comment/uncomment to show array colours in box
// ~ Initialising index as 0 so that index in the while loop starts at the first index of the colourArrayToLoop
// let index = 0;
// while (index < colourArrayToLoop.length) {
//   colourList += `<p style=
//   'display: inline;
//   background-color: ${colourArrayToLoop[index]};
//   padding: 5px 10px;
//   border: solid 1px black;'
//   >${colourArrayToLoop[index]}</p><br/>`;
//   // ~ Increase the index by one after creating previous paragraph
//   index++;
// }

loopDisplay.innerHTML = colourList;
