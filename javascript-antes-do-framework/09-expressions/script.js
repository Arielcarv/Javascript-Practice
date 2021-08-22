const groupA = 100;
const groupB = 300;
const vencedor = groupA > groupB ? "Group A Won" : "Grupo B Won";
document.querySelector("#app").innerText = `${vencedor}`;

/* Conditional Expression */
const groupAWon = groupA > 50 && "Group A Winner";
console.log(groupAWon);
document.querySelector("#app1").innerText = `${groupAWon}`;


const numbers = [2, 3, 4, 5, 6];
const biggerThanFour = numbers.filter(number => number >= 4);
document.querySelector("#app2").innerText = `Numbers bigger than four: ${biggerThanFour}`;
