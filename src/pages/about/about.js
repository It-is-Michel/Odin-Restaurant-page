import "./about.css";

const aboutpage = document.createElement("div");
aboutpage.classList.add("aboutPage");

const ourStoryH2 = document.createElement("h2");
ourStoryH2.textContent = "Our Story";
ourStoryH2.classList.add("title");
aboutpage.appendChild(ourStoryH2);

const ourStoryP = document.createElement("p");
ourStoryP.textContent = "Inspired by the tradition of artisanal pizza, this project was created to bring authentic flavors to every home. We combine classic recipes with a modern approach, carefully selecting high-quality ingredients and paying attention to every step of the process. More than just a pizzeria, our goal is to create a warm and memorable experience for anyone who enjoys great food.";
ourStoryP.classList.add("paragraph");
aboutpage.appendChild(ourStoryP);

const quealityAndIngredientsH2 = document.createElement("h2");
quealityAndIngredientsH2.textContent = "Quality & Ingredients";
quealityAndIngredientsH2.classList.add("title");
aboutpage.appendChild(quealityAndIngredientsH2);

const quealityAndIngredientsP = document.createElement("p");
quealityAndIngredientsP.textContent = "We believe that a great pizza starts with excellent ingredients. That’s why we use fresh dough, daily-prepared sauces, and a thoughtful selection of products to ensure consistent flavor and quality. Our commitment is to offer a simple yet well-crafted menu, where every slice reflects care and dedication to the craft.";
quealityAndIngredientsP.classList.add("paragraph");
aboutpage.appendChild(quealityAndIngredientsP);

const customerCommitmentH2 = document.createElement("h2");
customerCommitmentH2.textContent = "Quality & Ingredients";
customerCommitmentH2.classList.add("title");
aboutpage.appendChild(customerCommitmentH2);

const customerCommitmentP = document.createElement("p");
customerCommitmentP.textContent = "We focus on delivering a smooth, clear, and accessible experience through our web platform. We want every user to easily find their ideal option, customize their order, and enjoy the process as much as the final result. Customer satisfaction is at the heart of our project and drives every improvement we make.";
customerCommitmentP.classList.add("paragraph");
aboutpage.appendChild(customerCommitmentP);

export default aboutpage;