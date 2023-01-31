'use strict';

/*Exercise 1
Write a function filterRange(arr, a, b) that gets an array arr, looks for elements between a and b in it and returns an array of them.

The function should not modify the array. It should return the new array. For instance:

JAVASCRIPT
let arr = [5, 3, 8, 1]

let filtered = filterRange(arr, 1, 4)

alert( filtered )  // 3,1 (matching values)

alert( arr )      // 5,3,8,1 (not modified)
 */

let arr = [5, 3, 8, 1];
let filtered = (arr, a, b) => {
    return arr.filter(value => {
    return value >= a && value <= b;
    });
    }  

console.log(filtered(arr,1,4));  // 3,1 (matching values)
console.log(arr);     // 5,3,8,1 (not modified)

/*Exercise 2
You have an array of user objects, each one has user.name. Write the code that converts it into an array of names.

For instance:

JAVASCRIPT
let john = { name: "John", age: 25 }
let pete = { name: "Pete", age: 30 } 
let mary = { name: "Mary", age: 28 }

let users = [ john, pete, mary ]

let names = "... your code " 

alert( names ) // John, Pete, Mary */
let john = { name: "John", age: 25 }
let pete = { name: "Pete", age: 30 } 
let mary = { name: "Mary", age: 28 }

let users = [ john, pete, mary ];
let names = users.map(ele => ele.name).join(', ');
console.log(names);

/*Exercise 3
 Write the function getAverageAge(users) that gets an array of objects with property age and gets the average.

The formula for the average is (age1 + age2 + ... + ageN) / N. For instance:

JAVASCRIPT
let john = { name: "John", age: 25 }
let pete = { name: "Pete", age: 30 }
let mary = { name: "Mary", age: 29 }

let arr = [ john, pete, mary ]

alert( getAverageAge(arr) )   // (25 + 30 + 29) / 3 = 28*/

function getAverageAge(users) {
    return users.reduce((prev, user) => prev + user.age, 0) / users.length;
  }

  console.log(getAverageAge(users));