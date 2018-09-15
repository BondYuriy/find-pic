export default class Model {
  constructor(api, storage) {
    this.api = api;
    this.storage = storage;
  }

  getData(qurty, page) {
    return this.api.fetchData(qurty, page);
  }

  setStorage(favorites) {
    this.storage.setFavourites(favorites);
  }

  getStorage() {
    return this.storage.getFavorites();
  }

  removeStorage(id) {
    this.storage.removeFavorites(id);
  }
}
