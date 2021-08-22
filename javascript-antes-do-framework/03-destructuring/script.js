//  ## Destructuring event listener "mouseover" into function handleMouseOver
function handleMouseMove(event) {
  const clientX = event.clientX;
  const clientY = event.clientY;
  console.log(clientX, clientY);
}

function handleMouseMove(event) {
  const { clientX, clientY } = event;
  console.log(clientX, clientY);
}

function handleMouseMove({ clientX, clientY }) {
  console.log(clientX, clientY);
}

// ## Destruturing array
const frutas = ["Banana", "Uva"];

const fruta1 = frutas[0];
const fruta2 = frutas[1];
console.log(fruta1, fruta2)

const [fruta1, fruta2] = frutas;
console.log(fruta1, fruta2)

// ## Destructuring React Hooks
const useState = [
  "blue",
  function (color) {
    useState[0] = color;
  }
];

const [color, setColor] = useState;

// document.documentElement.addEventListener("mousemove", handleMouseMove);
