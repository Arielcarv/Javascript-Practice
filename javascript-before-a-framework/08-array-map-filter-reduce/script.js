const prices = [
  "Crédito",
  "R$ 200",
  "R$ 400",
  "Contas Pagar",
  "R$ 300",
  "R$ 400",
  "Meus dados",
];

/* Filter which one is a value */
// const priceFilter = prices.filter(function(price) {
//   if (price.includes("R$")) {
//     return true
//   }
//   return false
// })
const priceFilter = prices.filter((price) => price.includes("R$"));
document.querySelector("#app").innerText = `Prices List: ${priceFilter}`;


/* MAP array method  */
const priceNumber = priceFilter.map((price) => {
  return +price.replace("R$", "");
});
// const priceNumber = priceFilter.map((price) =>
//   Number(price.replace("R$ ", ""))
// );
document.querySelector("#app1").innerText =
  `Price Numbers List:  ${priceNumber}`;


/* REDUCE array method  */
const total = priceNumber.reduce(function (previousItem, currentlItem) {
  console.log(`Previous Item: ${previousItem} \nActual Item: ${currentlItem}`);
  return previousItem + currentlItem;
});
// const total = priceNumber.reduce((acc, item) => acc + item);

console.log(total);
