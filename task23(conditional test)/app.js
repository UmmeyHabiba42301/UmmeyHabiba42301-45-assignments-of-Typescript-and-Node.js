"use strict";
/*TASK 23(Conditional Tests: Write a series of conditional tests.
     Print a statement describing each test and your prediction for the results of each test.
     Your code should look something like this:
let car = 'subaru';
console.log("Is car == 'subaru'? I predict True.")
console.log(car == 'subaru')
• Look closely at your results, and make sure you understand why each line evaluates to True or False.
• Create at least 10 tests. Have at least 5 tests evaluate to True and another 5 tests evaluate to False.)*/
let cars = 'subaru';
//test 1: equality comparision (true)
console.log("Is car=='subaru'? I predict True.");
console.log(cars == 'subaru'); //true
//test2: strict equality comparision (true)
console.log("Is car === 'subaru'? I predict True.");
console.log(cars === 'subaru'); //true
//test 3:Inequality comparision (false)
console.log("Is car != 'subaru'? I predict False.");
console.log(cars != 'subaru'); //false
//test 4: Strict Inequality comparision (false)
console.log("Is car !== 'subaru'? I predict False.");
console.log(cars !== 'subaru'); //false
//test 5:less than comparision (false)
console.log("Is car < 'subaru'? I predict False.");
console.log(cars < 'subaru'); //false (lexicographic comparison)
//test 6:Greater than comparision (false)
console.log("Is car > 'subaru'? I predict False.");
console.log(cars > 'subaru'); //false (lexicographic comparison)
//test 7:less than or equal to comparision (true)
console.log("Is car <= 'subaru'? I predict True.");
console.log(cars <= 'subaru'); //true
//test 8:Greater than or equal to comparision (true)
console.log("Is car >= 'subaru'? I predict True.");
console.log(cars >= 'subaru'); //true
//test 9:checking truthiness (true)
console.log("Is car? I predict True.");
console.log(cars); //true (non -empty string is truthy)
//test 10:checking falsiness (false)
console.log("Is car? I predict False.");
console.log(cars); //false (negation of a truthy value)
