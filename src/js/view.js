import EventEmitter from "../service/event-emitter";

export default class View extends EventEmitter {
  constructor() {
    super();
    this.list = document.querySelector(".js-list");
    this.main = document.querySelector(".gallery");
    this.galleryContainer = document.querySelector(
      ".gallery-header__container"
    );
    this.addMore = document.querySelector(".js-next-btn");
    this.modal = document.querySelector(".js-modal");
    this.modelImg = document.querySelector(".js-modal-img");
  }

  addsElements(items) {
    this.galleryContainer.classList.remove("home-page-padding");
    this.addMore.classList.remove("hidden");

    this.createsElements(items);
  }

  createsElements(items) {
    const elements = items.map(item => {
      const listItem = document.createElement("li");
      listItem.classList.add("gallery-list__item");
      listItem.classList.add("js-list-item");

      const listItemImg = document.createElement("img");
      listItemImg.classList.add("gallery-img");
      listItemImg.setAttribute("src", item.webformatURL);
      listItemImg.setAttribute("alt", item.tags);
      listItemImg.setAttribute("id", item.id);

      listItem.appendChild(listItemImg);
      return listItem;
    });

    this.list.append(...elements);
  }

  q(url) {
    this.modal.classList.remove("hidden");
    this.modelImg.setAttribute("src", url);
  }
  
  closeModal() {
    this.modal.classList.add("hidden");
  }
}
