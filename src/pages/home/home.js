import Carousel from "../../carousel-component/carousel.js";

import pizzaHawaiianJPG from "./pizzaHawaiian.jpg";
import pizzaMuzzarellaJPG from "./pizzaMuzzarella.jpg";
import pizzaNeapolitanJPG from "./pizzaNeapolitan.jpg";
import pizzaFugazzetaJPG from "./pizzaFugazzeta.jpg";
import pizzaSpecialJPG from "./pizzaSpecial.jpg";

const homePage = document.createElement("div");

const generateDOM = (() => {
  const mostSoldPizzasCarousel = new Carousel("Most sold pizzas");
  mostSoldPizzasCarousel.height = "400px";
  mostSoldPizzasCarousel.itemsWidth = "400px";
  mostSoldPizzasCarousel.backgroundColor = "transparent";
  mostSoldPizzasCarousel.textColor = "var(--text-color-dark)";
  mostSoldPizzasCarousel.addItem(pizzaHawaiianJPG, "Hawaiian", 7.62);
  mostSoldPizzasCarousel.addItem(pizzaMuzzarellaJPG, "Muzzarella", 4.35);
  mostSoldPizzasCarousel.addItem(pizzaNeapolitanJPG, "Neapolitan", 7.56);
  mostSoldPizzasCarousel.addItem(pizzaFugazzetaJPG, "Fugazzeta", 6.15);
  mostSoldPizzasCarousel.addItem(pizzaSpecialJPG, "Special", 8.35);

  homePage.appendChild(mostSoldPizzasCarousel.element);


})();

export default homePage;