"use strict";
/*task 41(Magicians: Make a array of magician’s names.
     Pass the array to a function called show_magicians(),
      which prints the name of each magician in the array.)*/
function show_magicians(Magicians) {
    for (const magician of Magicians) {
        console.log(magician.charAt(0).toUpperCase() + magician.slice(1));
    }
}
const magician = ["mohsin", "rameez", "ammad"];
show_magicians(magician);
