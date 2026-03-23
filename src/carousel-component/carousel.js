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

  /** @type {Node} */
  #root;
  /** @type {Node} */
  #carouselTitle;
  /** @type {Node} */
  #carouselItemsList;
  /** @type {Node} */
  #leftButton;
  /** @type {Node} */
  #rightButton;

  constructor(title) {
    this.#generateDOM();
    this.#addEventHandlers();
    
    this.title = title;
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

  get element() {
    return this.#root;
  }

  #generateDOM() {
    this.#root = document.createElement("div");
    this.#root.classList.add("carousel");

    this.#carouselItemsList = document.createElement("ul");
    this.#carouselItemsList.classList.add("carousel__items-list");
    this.#root.appendChild(this.#carouselItemsList);

    this.#leftButton = document.createElement("button");
    this.#leftButton.classList.add("carousel__move-left-button");
    this.#root.appendChild(this.#leftButton);

    this.#rightButton = document.createElement("button");
    this.#rightButton.classList.add("carousel__move-right-button");
    this.#root.appendChild(this.#rightButton);
  }

  #addEventHandlers() {
    const implementDrag = (() => {

      let userIsDragging = false;
      let startX;
      let currentX;

      this.#root.addEventListener("pointerdown", (e) => {
        e.preventDefault();

        if (e.target === this.#leftButton) {
          this.moveLeft();
          return;
        }
        if (e.target === this.#rightButton) {
          this.moveRight();
          return;
        }

        if (!this.#carouselItemsList.contains(e.target)) return;

        userIsDragging = true;
        startX = e.clientX;
        currentX = startX;
      });

      this.#root.addEventListener("pointermove", (e) => {
        e.preventDefault();
        if (!userIsDragging) return;

        currentX = e.clientX;
      });

      this.#root.addEventListener("pointerup", (e) => {
        e.preventDefault();
        if (!userIsDragging) return;

        const delta = currentX - startX;
        if (delta > 0) {
          this.moveRight();
        } else if (delta < 0) {
          this.moveLeft();
        }

        if (delta === 0) {
          alert("Sorry, we have no more food. We were hungry ):");
        }

        userIsDragging = false;
      })
    })();
  }

  addItem(itemImg, itemName, itemPrice) {
    const newItem = new CarouselItem(itemImg, itemName, itemPrice);
    newItem.element.setAttribute("data-carousel-uuid", crypto.randomUUID());

    this.#itemsList.push(newItem);
    this.#carouselItemsList.appendChild(newItem.element);
  }

  removeItem(itemUUID) {
    this.#itemsList = this.#itemsList.filter((item) => item.getAttribute("data-carousel-uuid") !== itemUUID);
    this.#carouselItemsList.removeChild(newItem.element);
  }

  #move(steps) {
    if (steps === 0 || typeof steps !== "number") throw new Error("Movement amount must be a number, higher or lower than 0.");

    const sum = steps > 0 ? 1 : -1;
    const moveOneStep = sum > 0 ? () => {this.#carouselItemsList.appendChild(this.#carouselItemsList.firstChild)}
      : () => {this.#carouselItemsList.insertBefore(this.#carouselItemsList.lastChild, this.#carouselItemsList.firstChild)};
    for (let i = 0; Math.abs(i) < Math.abs(steps); i += sum) {
      moveOneStep();
    }
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
  
  set itemsListBackgroundColor(color) {
    this.#root.style.setProperty("--items-list-bg-color", color);
  }

  set height(height) {
    this.#root.style.setProperty("height", height);
  }
};