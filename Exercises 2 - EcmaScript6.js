'use strict';

/*Exercise 1
The following function returns true if the parameter age is greater than 18.

Otherwise, it asks for a confirmation and returns its result.

JAVASCRIPT
function checkAge(age) {
  if (age > 18) {
    return true;
  } else {
    return confirm('Do you have your parents permission to access this page?');
  }
}
Rewrite it, to perform the same, but without if...else, and using arrow function. */

let checkAge = age => age > 18 ? true : 'Do you have your parents permission to access this page?';
console.log(checkAge(19));

/* Exercise 2
Write a function pow(x,n) that returns x in power n. Or, in other words, multiplies x by itself n times and returns the result.

JAVASCRIPT
pow(3, 2) = 3 * 3 = 9
pow(3, 3) = 3 * 3 * 3 = 27
pow(1, 100) = 1 * 1 * ...* 1 = 1
P.S. In this task the function should support only natural values of n: integers up from 1.*/

function pow(x, n) {
    let result = x;
    for (let i = 1; i < n; i++) {
      result *= x;
    }
    return result;
  }
  console.log(pow(3,3));

/*Exercise 3
Replace Function Expressions with arrow functions in the code:

JAVASCRIPT
function ask(question, yes, no) {
  if (confirm(question)) yes()
  else no()
}

ask(
  "Do you agree?",
  function() { alert("You agreed.") },
  function() { alert("You canceled the execution.") }
) */

let ask = (question , yes ,no)=>{
    (question) ? yes() : no();
}

ask(
    "Do you agree?",
    function() { console.log("You agreed.") },
    function() { console.log("You canceled the execution.") }
  ) 

  /* Exercise 4
Create an object calculator with three methods:

read() prompts for two values and saves them as object properties.
sum() returns the sum of saved values.
mul() multiplies saved values and returns the result.
JAVASCRIPT
*/

let calculator = {
    // ... your code ...
    read() {
        this.a = +prompt('Enter first value:', 0);
        this.b = +prompt('Enter second value:', 0);
      },
      sum() {
        return this.a + this.b;
      },
      mul() {
        return this.a * this.b;
      }
  };
  
  calculator.read();
  console.log( calculator.sum() );
  console.log( calculator.mul() );

  /*Exercise 5
    Write a function min(a,b) which returns the least of two numbers a and b.
    Use arrow function along with the question mark operator ? */

    const min = (a, b) =>  {return a < b ? a : b;} ;
    console.log(min(2,3)) ;