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
    this.#element.classList.add("catalog");
  }

  addItem(img, productName, desc, price) {
    const item = document.createElement("div");
    item.classList.add("catalog__item");
    this.#element.appendChild(item);

    const itemImgConteiner = document.createElement("div");
    itemImgConteiner.classList.add("catalog__itemImgContainer");
    item.appendChild(itemImgConteiner);

    const itemImg = document.createElement("img");
    itemImg.setAttribute("src", img);
    itemImgConteiner.appendChild(itemImg);

    const itemName = document.createElement("h3");
    itemName.classList.add("catalog__itemName");
    itemName.textContent = productName;
    item.appendChild(itemName);

    const itemDesc = document.createElement("p");
    itemDesc.classList.add("catalog__itemDesc");
    itemDesc.textContent = desc;
    item.appendChild(itemDesc);

    const itemPrice = document.createElement("p");
    itemPrice.classList.add("catalog__itemPrice");
    itemPrice = `Price: $${price}`;
    item.appendChild(itemPrice);
  }
}

export default Catalog;