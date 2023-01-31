'use strict';
/* Exercise 1
We have a simple object:

JAVASCRIPT
let user = {
  name: "John",
  years: 30
}
Write the destructuring assignment that reads:

name property into the variable name.
years property into the variable age.
isAdmin property into the variable isAdmin (false if absent)*/

let user = {
    name: "John",
    years: 30
  }
  const { name:name, years: age, isAdmin = false } = user;

 console.log(user);

 /* Exercise 2
Give the right name:

Create the variable with the name of our planet. How would you name such a variable?
Create the variable to store the name of the current visitor. How would you name that variable?*/

const planet = 'earth';
let currentVisitor = 'name';

// Exercise 3
// let phrase = "Hello"

// if (true) {
//   let user = "John";
//   function sayHi() {
//     console.log(`${phrase}, ${user}`)
//   }
// }

// sayHi()

console.log("we will get undefined because sayHi function don't return any value to call it outside the function");

/*Exercise 4
Write the code, one line for each action:
Create an empty object user.
Add the property name with the value John.
Add the property surname with the value Smith.
Change the value of the name to Pete.
Remove the property name from the object. */

let userObj ={
    name: 'John',
    surname: 'Smith'
};
console.log(userObj.name = 'Pete');
delete userObj.name;
console.log(userObj);


/*Exercise 5
Is it possible to change an object declared with const, how do you think and why?

JAVASCRIPT
const user = {
  name: "John"
}

// does it work?
user.name = "Pete" */

console.log("answer: yes we can change it because it's chaning for prop not reassign for the variable");

/*Exercise 6
We have an object storing salaries of our team:

JAVASCRIPT
let salaries = {
  Fred: 100,
  Ted: 160,
  Ghaith: 130
}
Write a code to sum all salaries and store in the variable sum. If salaries is empty, then the result must be 0. */

let salaries = {
    Fred: 100,
    Ted: 160,
    Ghaith: 130
  }

  const salariesSum = Object.values(salaries).reduce((acc, cur) => acc + cur, 0);
  console.log(salariesSum);

  /*Exercise 7
Rewrite this if using the ternary operator '?':

JAVASCRIPT
if (a + b < 4) {
  result = 'Below';
} else {
  result = 'Over';
} */
const a = 3,
      b = 0;
      const ternaryResult = (a + b < 4) ? 'Below' : 'Over';
      console.log(ternaryResult);


/*Exercise 8
Rewrite if..else using multiple ternary operators '?'.

JAVASCRIPT
let message;

if (login == 'Employee') {
  message = 'Hello';
} else if (login == 'Director') {
  message = 'Greetings';
} else if (login == '') {
  message = 'No login';
} else {
  message = '';
} */      

let login = 'Employee';

const message = login === 'Employee' ? `Hello ${login}`  : 
                login === 'Director' ? 'Greetings' : 
                login === '' ? 'No login' : '';
console.log(message);
