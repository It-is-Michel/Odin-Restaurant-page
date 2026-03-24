import "./pizzas.css";
import Catalog from "../../catalog-component/catalog.js";
import fugazzetaJPG from "../pizzaFugazzeta.jpg";
import hawaiianJPG from "../pizzaHawaiian.jpg";
import muzzarellaJPG from "../pizzaMuzzarella.jpg";
import specialJPG from "../pizzaSpecial.jpg";
import neapolitanJPG from "../pizzaNeapolitan.jpg";

const pizzasPage = document.createElement("div");

const pizzasCatalog = new Catalog();
pizzasPage.appendChild(pizzasCatalog.element);
pizzasCatalog.element.style.margin = "1rem 20vw";
pizzasCatalog.backgroundColor = "var(--color-secondary-hsl)";
pizzasCatalog.borderColor = "var(--color-secondary-hsl)";
pizzasCatalog.textColor = "var(--text-color-dark)";
pizzasCatalog.addItem(fugazzetaJPG, "Fugazzeta", "Very tasty fugazzeta.", 10);
pizzasCatalog.addItem(hawaiianJPG, "Hawaiian", "Very tasty hawaiian.", 10);
pizzasCatalog.addItem(muzzarellaJPG, "Muzzarella", "Very tasty muzzarella.", 10);
pizzasCatalog.addItem(specialJPG, "Special", "Very tasty special.", 10);
pizzasCatalog.addItem(neapolitanJPG, "Neapolitan", "Very tasty neapolitan.", 10);

export default pizzasPage;