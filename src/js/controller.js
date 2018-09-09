export default class Controller {
  constructor(model, view) {
    this.model = model;
    this.view = view;

    this.form = document.querySelector(".js-form");
    this.addMore = document.querySelector(".js-next-btn");
    this.input = document.querySelector(".js-input");
    this.list = document.querySelector(".js-list");
    this.logoBtn = document.querySelector(".js-logo");
    this.closeBtn = document.querySelector('.js-btn-close');
    this.backBtn = document.querySelector('.js-btn-back');
    this.nextBtn = document.querySelector('.js-btn-next');
    this.galleryItem = '';
    this.page = 1;

    this.form.addEventListener("submit", this.addHandler.bind(this));
    this.addMore.addEventListener("click", this.addNextHandler.bind(this));
    this.list.addEventListener('click', this.zooms.bind(this));
    this.closeBtn.addEventListener('click', this.closeModal.bind(this));
    this.backBtn.addEventListener('click', this.backImg.bind(this));
    this.nextBtn.addEventListener('click', this.nextImg.bind(this));
  }

  addHandler(evt) {
    evt.preventDefault();
    this.model
      .getData(this.input.value)
      .then(data => this.view.addsElements(data));
  }

  addNextHandler() {
    this.addPage();
    this.model
      .getData(this.input.value, this.page)
      .then(data => this.view.createsElements(data));
  }

  addPage() {
    this.page += 1;
  }

  zooms(evt) {
    if(evt.target.tagName !== 'IMG') {
      return;
    } 
    this.galleryItem = evt.target.parentNode;
    this.view.q(evt.target.src);
  }

  closeModal (){
    this.view.closeModal();
  }

  backImg() {
    const backItem  = this.galleryItem.previousSibling.firstChild.src;
    this.view.q(backItem);
    this.galleryItem = this.galleryItem.previousSibling;
  }

  nextImg() {
    const nextItem  = this.galleryItem.nextSibling.firstChild.src;
    this.view.q(nextItem);
    this.galleryItem = this.galleryItem.nextSibling;
  }
}
