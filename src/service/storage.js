export default class Storage {
  constructor() {
    this.name = "favorites";

    if (!localStorage.getItem(this.name)) {
      localStorage.setItem(this.name, JSON.stringify({ pictures: [] }));
    }
  }

  setFavourites(favourites) {
    const picture = JSON.parse(localStorage.getItem(this.name));
    if (!picture.pictures.some(item => item.id === favourites.id)) {
      picture.pictures.push(favourites);
      localStorage.setItem(this.name, JSON.stringify(picture));
    }
  }

  getFavorites() {
    return JSON.parse(localStorage.getItem(this.name)).pictures;
  }
}
