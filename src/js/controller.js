export default class Controller {
  constructor(model, view) {
    this.model = model;
    this.view = view;

    this.form = document.querySelector(".js-form");
    this.addMore = document.querySelector(".js-next-btn");
    this.input = document.querySelector(".js-input");
    this.list = document.querySelector(".js-list");
    this.listFav = document.querySelector(".js-list-favorites");
    this.logoBtn = document.querySelector(".js-logo");
    this.closeBtn = document.querySelector(".js-btn-close");
    this.backBtn = document.querySelector(".js-btn-back");
    this.nextBtn = document.querySelector(".js-btn-next");
    this.addfavoritesBtn = document.querySelector(".js-btn-favorites");
    this.favoritesBtn = document.querySelector(".js-favorites");
    this.removeFav = document.querySelector(".js-list-favorites");
    this.qurty = "";
    this.galleryItem = "";
    this.page = 1;

    this.form.addEventListener("submit", this.addHandler.bind(this));
    this.addMore.addEventListener("click", this.addNextHandler.bind(this));
    this.list.addEventListener("click", this.zooms.bind(this));
    this.listFav.addEventListener("click", this.zoomsFavorites.bind(this));
    this.closeBtn.addEventListener("click", this.closeModal.bind(this));
    this.backBtn.addEventListener("click", this.backImg.bind(this));
    this.nextBtn.addEventListener("click", this.nextImg.bind(this));
    this.addfavoritesBtn.addEventListener(
      "click",
      this.addToFavorites.bind(this)
    );
    this.favoritesBtn.addEventListener(
      "click",
      this.displaysFavorites.bind(this)
    );
    this.logoBtn.addEventListener("click", this.toMain.bind(this));
    this.removeFav.addEventListener(
      "click",
      this.removeFavoritesItem.bind(this)
    );
  }

  addHandler(evt) {
    this.qurty = this.input.value;
    if (this.qurty !== "") {
      evt.preventDefault();
      this.model.getData(this.qurty).then(data => this.view.addsElements(data));
      this.form.reset();
    }
  }

  addNextHandler() {
    if (this.qurty !== "") {
      this.addPage();
      this.model
        .getData(this.qurty, this.page)
        .then(data => this.view.addsElements(data));
    }
  }

  addPage() {
    this.page += 1;
  }

  zooms(evt) {
    if (evt.target.tagName === "IMG") {
      this.galleryItem = evt.target.parentNode;
      this.view.createsLargeImg(evt.target.srcset);
    }
  }

  zoomsFavorites(evt) {
    if (evt.target.firstChild.tagName === "IMG") {
      this.galleryItem = evt.target;
      this.view.createsLargeImg(evt.target.firstChild.srcset);
    }
  }

  backImg() {
    const backItem = this.galleryItem.previousSibling.firstChild.srcset;
    this.view.createsLargeImg(backItem);
    this.galleryItem = this.galleryItem.previousSibling;
  }

  nextImg() {
    const nextItem = this.galleryItem.nextSibling.firstChild.srcset;
    this.view.createsLargeImg(nextItem);
    this.galleryItem = this.galleryItem.nextSibling;
  }

  closeModal() {
    this.view.closeModal();
  }

  addToFavorites() {
    const favorites = {
      id: this.galleryItem.firstChild.id,
      webformatURL: this.galleryItem.firstChild.src,
      largeImageURL: this.galleryItem.firstChild.srcset,
      tags: this.galleryItem.firstChild.alt
    };
    this.model.setStorage(favorites);
  }

  displaysFavorites() {
    this.view.addsElementsFavorites(this.model.getStorage());
  }

  toMain() {
    this.view.showsTheMain();
  }

  toFavorites() {
    this.view.showsTheFavorites();
  }

  removeFavoritesItem(evt) {
    if (evt.target.tagName === "BUTTON") {
      const id = evt.target.previousSibling.id;
      this.model.removeStorage(id);
      this.view.removeElementFavorites(evt.target.parentNode);
    }
  }
}
