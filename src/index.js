import "./styles.css";

const headerNavegator = (() => {
  function goHome() {
    throw new Error("Not implemented yet.");
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