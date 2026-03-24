import "./home.css";
import Carousel from "../../carousel-component/carousel.js";

import pizzaHawaiianJPG from "../pizzaHawaiian.jpg";
import pizzaMuzzarellaJPG from "../pizzaMuzzarella.jpg";
import pizzaNeapolitanJPG from "../pizzaNeapolitan.jpg";
import pizzaFugazzetaJPG from "../pizzaFugazzeta.jpg";
import pizzaSpecialJPG from "../pizzaSpecial.jpg";

const homePage = document.createElement("div");

const generateDOM = (() => {
  // Start adding carousel
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

  // Adding cards
  const cardsContainer = document.createElement("div");
  cardsContainer.classList.add("cards-container");
  homePage.appendChild(cardsContainer);

  const cardFastDelivery = document.createElement("div");
  cardFastDelivery.classList.add("advantages-card")
  cardsContainer.appendChild(cardFastDelivery);
  const cardFastDeliveryTitle = document.createElement("h2");
  cardFastDeliveryTitle.textContent = "Fast delivery";
  cardFastDelivery.appendChild(cardFastDeliveryTitle)
  const cardFastDeliveryText = document.createElement("p");
  cardFastDeliveryText.textContent = "Hot and ready at your door in minutes.";
  cardFastDelivery.appendChild(cardFastDeliveryText)
  
  const cardFreshIngredients = document.createElement("div");
  cardFreshIngredients.classList.add("advantages-card")
  cardsContainer.appendChild(cardFreshIngredients);
  const cardFreshIngredientsTitle = document.createElement("h2");
  cardFreshIngredientsTitle.textContent = "Fresh ingredients";
  cardFreshIngredients.appendChild(cardFreshIngredientsTitle);
  const cardFreshIngredientsText = document.createElement("p");
  cardFreshIngredientsText.textContent = "Only the best, selected daily.";
  cardFreshIngredients.appendChild(cardFreshIngredientsText);
  
  const cardHandmadeDough = document.createElement("div");
  cardHandmadeDough.classList.add("advantages-card")
  cardsContainer.appendChild(cardHandmadeDough);
  const cardHandmadeDoughTitle = document.createElement("h2");
  cardHandmadeDoughTitle.textContent = "Handmade dough";
  cardHandmadeDough.appendChild(cardHandmadeDoughTitle);
  const cardHandmadeDoughText = document.createElement("p");
  cardHandmadeDoughText.textContent = "Crafted by hand for perfect texture and flavor.";
  cardHandmadeDough.appendChild(cardHandmadeDoughText);
})();

export default homePage;