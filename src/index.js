import "./styles.css";
import homePage from "./pages/home/home.js";

const headerNavegator = (() => {
  const webContent = document.querySelector("#webContent");

  function goHome() {
    webContent.removeChild(webContent.firstChild);
    webContent.appendChild(homePage);
  }

  function goPizzas() {
    throw new Error("Not implemented yet.");
  }

  function goAbout() {
    throw new Error("Not implemented yet.");
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