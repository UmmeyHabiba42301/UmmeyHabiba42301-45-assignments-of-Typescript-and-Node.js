"use strict";
/* task 14 Guest List: If you could invite anyone, living or deceased, to dinner,
 who would you invite? Make a list that includes at least three people you’d like to invite to dinner.
 Then use your list to print a message to each person, inviting them to dinner.*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.Guest_List = void 0;
let Guest_List = ["Affan", "Ali", "Hibba", "Hina"];
exports.Guest_List = Guest_List;
for (let i = 0; i < Guest_List.length; i++) {
    console.log(`Dear ${Guest_List[i]}:\n you are invited to dinner! \n`);
}
