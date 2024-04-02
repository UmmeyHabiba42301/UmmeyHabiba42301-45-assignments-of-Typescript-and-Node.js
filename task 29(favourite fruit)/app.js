"use strict";
/*Favorite Fruit: Make a array of your favorite fruits,
and then write a series of independent if statements that check for certain fruits in your array.
• Make a array of your three favorite fruits and call it favorite_fruits.

• Write five if statements. Each should check whether a certain kind of fruit is in your array.
 If the fruit is in your array, the if block should print a statement, such as You really like bananas!*/
let favorite_fruits = ['watermelon', 'pineapple', 'guava'];
if (favorite_fruits.includes('watermelon')) {
    console.log('You really like watermelon!');
}
if (favorite_fruits.includes('pineapple')) {
    console.log('You really like pineapple!');
}
if (favorite_fruits.includes('mango')) {
    console.log('You really like mango!');
}
if (favorite_fruits.includes('orange')) {
    console.log('You really like orange!');
}
if (favorite_fruits.includes('guava')) {
    console.log('You really like guavas!');
}
