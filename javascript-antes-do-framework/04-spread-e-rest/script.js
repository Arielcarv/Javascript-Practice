// Take the first parameter as 'company' and the rest as 'clients'.
function showList(company, ...clients) {
  console.log(company);
  console.log(clients);
}
showList("Origamid", "João", "Maria", 10);

/* Passing an array number by number through spread operator. 
   It expands any iterable into individual elements.*/
const numbers = [1, 2, 4, 29, 32, 2, 45, 3];
console.log(...numbers);
console.log(Math.max(...numbers));

const items = document.querySelectorAll("li");
const itemsArray = Array.from(document.querySelectorAll("li"));

/* items.forEach(item => {
  console.log(item)
}); */

// Can't use items because it's a 'NodeList', not an array.
/* itemsArray.map(item => { 
  console.log(item);
}); */

[...items].map(item => {
  console.log(item);
});

console.log(items);


/*<-----------------------   class and spreadClone    ----------------------->*/
const carro = { cor: "Azul", portas: 4, ano: 2020 };  // That's just a generic Object
const cloneCarro = { ...carro, turbo: true };         // That's just another generic Object + turbo


class Transporte {
  constructor() {
    this.terrestre = true;
  }
  andar() {
    console.log("andou");
  }
}

class Car extends Transporte { 
  constructor(cor, portas) {
    super();
    this.cor = cor;
    this.portas = portas;
  }
}

const car = new Car("vermelho", 4);
const cloneCar = { ...car };

console.log(car);       // This one is a 'Car object'.
console.log(cloneCar);  // This one is just a generic object with the properties of the 'Car Object'
