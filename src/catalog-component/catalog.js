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
    const imgIsValid = typeof img === "string" && img.match(/\.(png|svg|jpg|jpeg|gif)$/i);
    if (!imgIsValid) throw new Error("The img must be an image path. Allowed formats: png, svg, jpg, jpeg, gif.");

    const productNameIsvalid = typeof productName === "string" && productName.length <= 40;
    if (!productNameIsvalid) throw new Error("The product name must be a string with 40 or less characters.");

    const descIsValid = typeof desc === "string" && desc.length <= 300;
    if (!descIsValid) throw new Error("The description must be a string with 300 or less characters.");

    const priceIsvalid = typeof price === "number" && price > 0;
    if (!priceIsvalid) throw new Error("The price must be a number bigger than 0.");

    const item = document.createElement("div");
    item.classList.add("catalog__item");
    this.#element.appendChild(item);

    const itemImgConteiner = document.createElement("div");
    itemImgConteiner.classList.add("catalog__itemImgContainer");
    item.appendChild(itemImgConteiner);

    const itemImg = document.createElement("img");
    itemImg.classList.add("catalog__itemImg");
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
    itemPrice.textContent = `Price: $${price}`;
    item.appendChild(itemPrice);
  }

  set backgroundColor(color) {
    this.#element.style.backgroundColor = color;
  }

  set borderColor(color) {
    this.#element.style.borderColor = color;
  }

  set textColor(color) {
    this.#element.style.color = color;
  }
}

export default Catalog;