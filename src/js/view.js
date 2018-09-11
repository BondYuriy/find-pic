import EventEmitter from "../service/event-emitter";

export default class View extends EventEmitter {
  constructor() {
    super();
    this.main = document.querySelector(".gallery");
    this.galleryContainer = document.querySelector(
      ".gallery-header__container"
    );
    this.addMore = document.querySelector(".js-next-btn");
    this.modal = document.querySelector(".js-modal");
    this.modelImg = document.querySelector(".js-modal-img");
    this.galleryTitle = document.querySelector(".js-gallery-title");
    this.btnFavorites = document.querySelector(".js-btn-favorites");
    this.listMain = document.querySelector(".js-list-main");
    this.listFavorites = document.querySelector(".js-list-favorites");
    this.containerMain = document.querySelector(
      ".gallery-container__list-main"
    );
    this.containerFav = document.querySelector(".gallery-container__list-fav");
  }

  addsElements(items) {
    this.galleryContainer.classList.remove("home-page-padding");
    this.addMore.classList.remove("hidden");

    this.listMain.append(...this.createsElements(items));
  }

  createsElements(items) {
    const elements = items.map(item => {
      const listItem = document.createElement("li");
      listItem.classList.add("gallery-list__item");
      listItem.classList.add("js-list-item");

      const listItemImg = document.createElement("img");
      listItemImg.classList.add("gallery-img");
      listItemImg.setAttribute("src", item.webformatURL);
      listItemImg.setAttribute("srcset", item.largeImageURL);
      listItemImg.setAttribute("alt", item.tags);
      listItemImg.setAttribute("id", item.id);

      listItem.appendChild(listItemImg);
      return listItem;
    });

    return elements;
  }

  createsLargeImg(url) {
    this.modal.classList.remove("hidden");
    this.modelImg.setAttribute("src", url);
  }

  closeModal() {
    this.modal.classList.add("hidden");
  }

  addsElementsFavorites(items) {
    this.showsTheFavorites();

    if (this.listFavorites.children.length === 0) {
      this.galleryTitle.classList.remove("hidden");
      this.galleryContainer.classList.remove("home-page-padding");

      this.listFavorites.append(...this.createsElements(items));
    }
  }

  showsTheMain() {
    this.containerFav.classList.add("hidden");
    this.containerMain.classList.remove("hidden");
    this.listFavorites.innerHTML = '';
  }

  showsTheFavorites() {
    this.containerMain.classList.add("hidden");
    this.containerFav.classList.remove("hidden");
  }
}
