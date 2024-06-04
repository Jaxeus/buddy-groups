console.log('Connected ⚡');

// ! Objects

const person = {
  firstName: 'Jason',
  lastName: 'Cluley',
  age: 14,
};

// ? const person = {...}
// ? --> variable declaration for the object (variable name: person)

// ? {...} --> code block containing properties/key:value pairs

// ? firstName: 'Jason' / age: 14 --> properties ('key: value' pairs)

// ? firstName / lastName / age --> key(s)

// ? 'Jason' / 'Cluley' / 14 --> value(s)

// ? , --> comma separating properties, not semi-colon like css

// ! Example of using objects, functions etc in real life (probably integrated with a database)

// Card elements
const userName = document.getElementById('user'); // h2 "USERNAME"
const listOne = document.querySelector('.list-item1'); // li "Child #1"
const listTwo = document.querySelector('.list-item2'); // li "Child #2"
const listThree = document.querySelector('.list-item3'); // li "Child #3"

// Form elements
const inputEl1 = document.querySelector('.input-1'); // input "First Child"
const inputEl2 = document.querySelector('.input-2'); // input "Second Child"
const inputEl3 = document.querySelector('.input-3'); // input "Third Child"
const submitBtn = document.getElementById('submit-btn'); // button "Submit"

// * Submit form function and event listener for submit button

// * Hard coded within function (static)

// submitBtn.addEventListener('click', submitForm);

// function submitForm(e) {
//   console.log('Clicked! 🐁');
//   e.preventDefault();

//   userName.textContent = 'Ash';
//   listOne.textContent = 'Abra';
//   listTwo.textContent = 'Kadabra';
//   listThree.textContent = 'Alakazam';
// }

// * With hard-coded Object, dynamically rendered in function

// const user = {
//   Username: 'Ash',
//   firstChild: 'Abra',
//   secondChild: 'Kadabra',
//   thirdChild: 'Alakazam',
// };

// submitBtn.addEventListener('click', submitForm);

// function submitForm(e) {
//   console.log('Clicked! 🐁');
//   e.preventDefault();

//   userName.textContent = user.Username;
//   listOne.textContent = user.firstChild;
//   listTwo.textContent = user.secondChild;
//   listThree.textContent = user.thirdChild;
// }

// * Dynamic Object linked with form, dynamic function linked with object

// Make PRESS ME button respond to click and carry out function below
// submitBtn.addEventListener('click', submitForm);

// // submitForm function used in 'Submit' button
// function submitForm(e) {
//   // object within function this time
//   const user = {
//     Username: 'Ash',
//     firstChild: inputEl1.value,
//     secondChild: inputEl2.value,
//     thirdChild: inputEl3.value,
//   };

//   // console log
//   console.log('Clicked! 🐁');
//   // prevent default behaviour (submit)
//   e.preventDefault();

//   // Change text on username card to data input into form
//   userName.textContent = user.Username;
//   listOne.textContent = user.firstChild;
//   listTwo.textContent = user.secondChild;
//   listThree.textContent = user.thirdChild;
// }

// ! Event.target

const eventBtn = document.querySelector('.event');
const dotBtn = document.querySelector('.dot');
const targetBtn = document.querySelector('.target');

eventBtn.addEventListener('click', handleClick);
dotBtn.addEventListener('click', handleClick);
targetBtn.addEventListener('click', handleClick);

function handleClick(e) {
  // console.log(e.target);
  console.log('Clicked event-button!');
  console.log(e);
  console.log(e.target);

  // e.target.style.backgroundColor = 'orange';

  // if (e.target.style.backgroundColor !== 'orange') {
  //   e.target.style.backgroundColor = 'orange';
  // } else {
  //   e.target.style.backgroundColor = 'lime';
  // }

  if (e.target.textContent === 'Event') {
    document.body.style.backgroundColor = 'lightblue';
  } else if (e.target.textContent === 'Dot') {
    document.body.style.backgroundColor = 'lightyellow';
  } else if (e.target.textContent === 'Target') {
    document.body.style.backgroundColor = 'lightpink';
  }
}

// ! This keyword

const jason = {
  firstName: 'Jason',
  lastName: 'Cluley',
  age: 36,
  favouriteFood: 'Lobster Mornay',
  jobTitle: 'Support Worker',
  description: function () {
    return `${this.firstName} ${this.lastName} is ${
      this.age
    } years old and his favourite food is ${
      this.favouriteFood
    }. He currently works as a ${this.jobTitle} and ${
      this.jobTitle.toLowerCase() === 'web developer' ? `can` : `cannot`
    } afford to buy ${this.favouriteFood} ${
      this.jobTitle.toLowerCase() === 'web developer' ? `🤤` : `😔`
    }`;
  },
};

// jason.age = 37;
// jason.jobTitle = 'Web Developer';

console.log(jason.description());

// const thisPerson = document.getElementById('this-person');
// const infoBlock = document.querySelector('.info-block');

// infoBlock.style.backgroundColor = 'black';
// infoBlock.style.color = 'lightgreen';
// infoBlock.style.fontSize = '24px';
// thisPerson.textContent = jason.firstName;
// infoBlock.textContent = jason.description();

const str = ' georges jason christopher';
console.log(str);

const myStr = str
  // .trim()
  .split(' ')
  .map((w) => {
    return w[0].toUpperCase();
  });

console.log(myStr);
