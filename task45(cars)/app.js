"use strict";
/*task 45:(Cars: Write a function that stores information about a car in a Object.
     The function should always receive a manufacturer and a model name. It should then accept an arbitrary number of keyword arguments.
      Call the function with the required information and two other name-value pairs, such as a color or an optional feature.
     Print the Object that’s returned to make sure all the information was stored correctly.)*/
function createCar(manufacture, model, color) {
    return {
        manufacture: manufacture,
        model: model,
        color: color,
    };
}
const myCar = createCar("BMW", "M3", { color: "black", year: "2023" });
//  { color: "red",
//   feature: "sports", })
console.log(myCar);
