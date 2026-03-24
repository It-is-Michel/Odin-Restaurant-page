import "./styles.css";
import homePage from "./pages/home/home.js";
import pizzasPage from "./pages/pizzas/pizzas.js";
import aboutPage from "./pages/about/about.js";

const headerNavegator = (() => {
  const webContent = document.querySelector("#webContent");

  function goHome() {
    webContent.removeChild(webContent.firstChild);
    webContent.appendChild(homePage);
  }

  function goPizzas() {
    webContent.removeChild(webContent.firstChild);
    webContent.appendChild(pizzasPage);
  }

  function goAbout() {
    webContent.removeChild(webContent.firstChild);
    webContent.appendChild(aboutPage);
  }

  function clickEventHandler(e) {
    const targetID = e.target.id;
    if (targetID === "goHomeButton") {
      goHome();
      return;
    }
    if (targetID === "goPizzasButton") {
      goPizzas();
      return;
    }
    if (targetID === "goAboutButton") {
      goAbout();
      return;
    }
  }

  const headerNavegator = document.querySelector("#headerNavegator");
  headerNavegator.addEventListener("click", (e) => clickEventHandler(e));
})();

webContent.appendChild(homePage);