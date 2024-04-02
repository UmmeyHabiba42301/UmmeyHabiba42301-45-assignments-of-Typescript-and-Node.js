"use strict";
/*task 24(More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
• Tests for equality and inequality with strings

• Tests using the lower case function

• Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to

• Tests using "and" and "or" operators

• Test whether an item is in a array

• Test whether an item is not in a array)*/
let car = 'subaru';
let age = 25;
let numbers = [1, 2, 3, 4];
//string test
//test 01:
console.log("Is car == 'subaru'? I pedict True.");
console.log(car == 'subaru');
//test 02:
console.log("Is car === 'subaru'? I pedict False.");
console.log(car === 'subaru');
//test 03:
console.log("Is car != 'toyota'? I pedict True.");
console.log(car != 'toyota');
//test 04:
console.log("Is car !== 'subaru'? I pedict False.");
console.log(car != 'subaru');
//test 05:
console.log("Is car.tolowercase()? =='subaru'? I pedict True.");
console.log(car.toLowerCase() == 'subaru');
//test 06:
console.log("Is car.tolowercase()? =='subaru'? I pedict False.");
console.log(car.toLowerCase());
//test 07
console.log("Is age == 25? I predict True.");
console.log(age == 25);
//test 08
console.log("Is age != 30? I predict True.");
console.log(age != 30);
//test 09
console.log("Is age > 30? I predict False.");
console.log(age > 30);
//test 10
console.log("Is age <= 25? I predict True.");
console.log(age <= 25);
//test 11
console.log("Is age > 20 && age <30? I predict True.");
console.log(age > 20 && age < 30);
//test 12
console.log("Is age > 30 || age < 18? I predict False.");
console.log(age > 30 || age < 18);
//test 13
console.log("Is 3 in numbers? I predict True.");
console.log(3 in numbers);
//test 14
console.log("Is 5 in numbers? I predict False.");
console.log(5 in numbers);
