export default class Model {
  constructor(api, storage) {
    this.api = api;
    this.storage = storage;
    this.key = "9968633-69c1320fae33e8ec0bca60a09";
  }

  getData(qurty, page) {
    return this.api.fetchData(qurty, page);
  }

  setStorage (favorites) {
    this.storage.setFavourites(favorites);
  }

  getStorage () {
    return this.storage.getFavorites();
  }
}
