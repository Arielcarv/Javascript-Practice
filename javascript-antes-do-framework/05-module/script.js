import { squareArea, squarePerimeter } from "./square.js";
import randomNumber from "./randomNumber.js";
import Circle from "./circle.js";

// Default exports.
console.log(squareArea(4));
console.log(squarePerimeter(5));
console.log(randomNumber());

// Exports as an Object.
console.log(Circle.area(5));
console.log(Circle.circumference(5));
console.log(Circle.random());
