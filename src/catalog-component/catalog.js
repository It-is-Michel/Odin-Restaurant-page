import "./catalog.css";

class Catalog{
  /** @type {Node} */
  #element;

  constructor() {
    this.#generateDOM();
  }

  get element() {
    return this.#element;
  }

  #generateDOM() {
    this.#element = document.createElement("div");
  }
}

export default Catalog;