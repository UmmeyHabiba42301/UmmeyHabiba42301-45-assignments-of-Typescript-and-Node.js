/*task 16 More Guests: You just found a bigger dinner table, so now more space is available. 
Think of three more guests to invite to dinner.
• Start with your program from Exercise 15. 
Add a print statement to the end of your program informing people that you found a bigger dinner table.
• Add one new guest to the beginning of your array.
• Add one new guest to the middle of your array. 
• Use append() to add one new guest to the end of your list. 
• Print a new set of invitation messages, one for each person in your list.*/

let Guest_List: string[] = ["Affan", "Ali", "Hibba",];
//for (let i = 0; i < Guest_List.length; i++) {
  //console.log(`Dear ${Guest_List[i]}:\n you are invited to dinner! \n`);}
//console.log(`"unfortunately ${Guest_List[1]}, can't come to dinner."`);
//Guest_List[1] = "Hina";
console.log("\nNEW LIST OF INVITATION : \n");
for(let j=0; j< Guest_List.length; j++){console.log(`Dear ${Guest_List[j]} : \n you are invited to dinner`);}

console.log("Good news! We've found a bigger dinner table, so more spaces is available. So our new guest are :\n")
Guest_List.unshift("Zaheer");
Guest_List.splice(2, 0, "Zakir");
Guest_List.push("Zubair");
for (let i=0; i< Guest_List.length; i++){console.log(`Dear ${Guest_List[i]} :\n you are invited to dinner! \n`);}
