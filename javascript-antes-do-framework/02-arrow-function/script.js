// Transforming normal functions into ArrowFunctions.
function upperName(name) {
  return name.toUpperCase();
}

const arrowUpperName = (name) => {
  return name.toUpperCase();
}

const fullArrowUpperName = name => name.toUpperCase();

const countLetters = word => word.length;
console.log(countLetters("Ariel"));

class Menu {
  constructor(menu) {
    this.menuElement = document.querySelector(menu);
    this.activeClass = "active";
  }
  addActiveEvent() {
    this.menuElement.addEventListener("click", event => {
      // console.log(this);
      /* if (!event.target.classList.contains("active")) {
        event.target.classList.add(this.activeClass);
        console.log(this);
      } else {
        event.target.classList.remove(this.activeClass);
        console.log(this);
      } */
      event.target.classList.toggle(this.activeClass);

    });
  }
}

const menu = new Menu(".principal");
menu.addActiveEvent();
