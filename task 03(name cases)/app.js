"use strict";
// lower case
let personNAme = "Ummeyhabiba";
console.log("lowercase:", personNAme.toLowerCase());
// upper case
console.log("uppercase:", personNAme.toLocaleUpperCase());
// title case
console.log("titlecase:", personNAme.replace(/\bw/g, c => c.toUpperCase()));
