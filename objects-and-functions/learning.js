console.log('Connected and ready to learn 📔');

// ! Functions

// * createString function

function createString(parameter1, parameter2) {
  // console.log(`${parameter1} and ${parameter2}`);
  return `${parameter1} and ${parameter2}`;
}

// ? function --> function keyword

// ? createString --> function name

// ? parameter1, parameter2
// ? --> parameters that will come back as arguments when you call/invoke the function

// ? {console.log(`${parameter1} and ${parameter2}`)}
// ? or
// ? { return `${parameter1} and ${parameter2}` }
// ? --> Code block / JavaScript statement that will be the output from your function after it is called with arguments.

// * Calling the function above
// createString('Milo', 'Otis');

// ? Calling the function --> inputting arguments where there were parameters - 'Milo' replaces parameter1, 'Otis' replaces parameter2.

// ! Example of using a function showing on the browser

// * Reassignable string using called function
let createdString = createString('Mickey', 'Minnie');
console.log('Declared string: ', createdString);

createdString = createString('Wirt', 'Greg');
console.log('Reassigned string: ', createdString);

// * Retrieving elements from HTML
// Heading "Friend Names"
const friendNamesHeading = document.getElementById('friend-names');

// Button "PRESS ME"
const pressMe = document.querySelector('.press-me');

// * Function to change Friend Names Heading by pressing PRESS ME button
// function pressBtn() {
//   friendNamesHeading.textContent = createdString;
//   friendNamesHeading.style.color = 'yellow';
//   friendNamesHeading.style.backgroundColor = 'purple';
//   friendNamesHeading.style.borderColor = 'lime';
// }

// ! Note: the event listening is happening in HTML: onclick="pressBtn()"

// ! Make sure createString function at the top has a return

// * Function above but with 'if statement' toggle
function pressBtn() {
  if (friendNamesHeading.textContent !== 'Friend Names') {
    friendNamesHeading.textContent = 'Friend Names';
    friendNamesHeading.style.color = 'purple';
    friendNamesHeading.style.backgroundColor = 'yellow';
    friendNamesHeading.style.borderColor = 'purple';
  } else {
    friendNamesHeading.textContent = createdString;
    friendNamesHeading.style.color = 'yellow';
    friendNamesHeading.style.backgroundColor = 'purple';
    friendNamesHeading.style.borderColor = 'lime';
  }
}
