import "./carousel.css";

class CarouselItem {
  /** @type {String} */
  #img;
  /** @type {String} */
  #title;
  /** @type {Number} */
  #price;

  /** @type {Node} */
  #root;
  /** @type {Node} */
  #imgElement;
  /** @type {Node} */
  #titleElement;
  /** @type {Node} */
  #priceElement;

  constructor(img, title, price) {
    this.#generateDOM();

    this.img = img;
    this.title = title;
    this.price = price;
  }

  set img(img) {
    const imageIsNotValid = !(img.match(/\.(png|svg|jpg|jpeg|gif)$/i));
    if (imageIsNotValid) {
      console.log("The item image must be a png|svg|jpg|jpeg|gif file.");
      this.#img = "#";
    } else this.#img = img;

    if (!this.#imgElement) {
      this.#imgElement = document.createElement("div");;
      this.#imgElement.classList.add("carousel__item-image");
      this.#root.appendChild(this.#imgElement);
    }

    this.#imgElement.style.backgroundImage = `url(${this.#img})`;
  }

  set title(title) {
    const titleIsNotValid = (typeof title !== "string" || title === "");
    if (titleIsNotValid) throw new Error("The item title must be a non-empty string.");
    this.#title = title;

    if (!this.#titleElement) {
      this.#titleElement = document.createElement("h3");
      this.#titleElement.classList.add("carousel__item-title");
      this.#root.appendChild(this.#titleElement);
    }

    this.#titleElement.textContent = this.#title;
  }

  set price(price) {
    const priceIsNotValid = (typeof price !== "number" || price < 0);
    if (priceIsNotValid) throw new Error("The item price must be a non-negative number.");
    this.#price = price;

    if (!this.#priceElement) {
      this.#priceElement = document.createElement("p");
      this.#priceElement.classList.add("carousel__item-price");
      this.#root.appendChild(this.#priceElement);
    }

    const itemIsFree = (this.#price === 0);
    if (itemIsFree) this.#priceElement.textContent = "Price: Free";
    else this.#priceElement.textContent = `Price: $${this.#price}`;
  }

  get element() {
    return this.#root;
  }

  #generateDOM() {
    this.#root = document.createElement("li");
    this.#root.classList.add("carousel__item");
  }
};

export default class Carousel {
  #title;

  #itemsList = [];
  #itemsPerPage = 3;
  #currentPageStartIndex = 0;
  #currentPageEndIndex;

  /** @type {Node} */
  #root;
  /** @type {Node} */
  #carouselTitle;
  /** @type {Node} */
  #carouselItemsList;

  constructor(title, itemsPerPage) {
    this.#generateDOM();
    
    this.title = title;
    this.itemsPerPage = itemsPerPage;

    this.#currentPageEndIndex = this.#currentPageStartIndex + (this.#itemsPerPage - 1);
  }

  set title(title) {
    const titleIsNotValid = (typeof title !== "null" && !(typeof title === "string" && title !== ""));
    if (titleIsNotValid) throw new Error("The title must be a non-empty string or null.");
    this.#title = title;

    if (!this.#carouselTitle) {
      this.#carouselTitle = document.createElement("h2");
      this.#carouselTitle.classList.add("carousel__title");
      this.#root.insertBefore(this.#carouselTitle, this.#root.firstChild);
    }

    this.#carouselTitle.textContent = this.#title;
  }

  set itemsPerPage(itemsPerPage) {
    const itemsPerPageIsNotValid = typeof itemsPerPage !== "number" || itemsPerPage <= 0;
    if (itemsPerPageIsNotValid) throw new Error("The number of items per page must be greater than 0.");

    this.#itemsPerPage = itemsPerPage;
  }

  get element() {
    return this.#root;
  }

  #generateDOM() {
    this.#root = document.createElement("div");
    this.#root.classList.add("carousel");

    this.#carouselItemsList = document.createElement("ul");
    this.#carouselItemsList.classList.add("carousel__items-list");
    this.#root.appendChild(this.#carouselItemsList);

    // Add left-right button to carouselItemsList and hidde them to unhidde if necessary
  }

  addItem(itemImg, itemName, itemPrice) {
    const newItem = new CarouselItem(itemImg, itemName, itemPrice);
    newItem.element.setAttribute("data-carousel-uuid", crypto.randomUUID());

    this.#itemsList.push(newItem);
    this.#carouselItemsList.appendChild(newItem.element);

    this.#updateDisplay();
  }

  removeItem(itemUUID) {
    this.#itemsList = this.#itemsList.filter((item) => item.getAttribute("data-carousel-uuid") !== itemUUID);
    this.#carouselItemsList.removeChild(newItem.element);

    this.#updateDisplay();
  }

  #updateDisplay() {
    this.#itemsList.forEach((item, itemPos) => {
      if (this.#currentPageStartIndex <= itemPos && itemPos <= this.#currentPageEndIndex) item.element.style.display = "";
      else item.element.style.display = "none";
    });
  }

  #move(movementsAmount) {
    const newStartIndexIsOutOfRange = this.#currentPageStartIndex + movementsAmount < 0;
    const newEndIndexIsOutOfRange = this.#currentPageEndIndex + movementsAmount > (this.#itemsList.length - 1);
    if (newStartIndexIsOutOfRange || newEndIndexIsOutOfRange) return false;

    this.#currentPageStartIndex += movementsAmount;
    this.#currentPageEndIndex += movementsAmount;

    this.#updateDisplay();
  }

  moveLeft() {
    this.#move(-1);
  }

  moveRight() {
    this.#move(1);
  }

  set textColor(color) {
    this.#root.style.setProperty("--text-color", color)
  }

  set titleFontSize(fontSize) {
    this.#root.style.setProperty("--font-size-title", fontSize);
  }
  
  set itemTextFontSize(fontSize) {
    this.#root.style.setProperty("--font-size-item-text", fontSize);
  }
  
  set itemTitleFontSize(fontSize) {
    this.#root.style.setProperty("--font-size-item-title", fontSize);
  }
  
  set itemsWidth(width) {
    this.#root.style.setProperty("--items-width", width);
  }
  
  set gapBetweenItems(length) {
    this.#root.style.setProperty("--gap-between-items", length);
  }
  
  set backgroundColor(color) {
    this.#root.style.setProperty("background-color", color);
  }
  
  set height(height) {
    this.#root.style.setProperty("height", height);
  }
};