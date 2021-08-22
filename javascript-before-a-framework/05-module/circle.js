import randomNumber from "./randomNumber.js";

function area(radius) {
  return Math.PI * radius * radius;
}

function circumference(radius) {
  return 2 * radius * Math.PI;
}

function random() {
  return randomNumber();
}

const Circle = {
  area,
  circumference,
  random
};

export default Circle;
