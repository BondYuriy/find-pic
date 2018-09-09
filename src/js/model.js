export default class Model {
  constructor(api) {
    this.api = api;
    this.key = "9968633-69c1320fae33e8ec0bca60a09";
  }

  getData(qurty, page) {
    return this.api.fetchData(qurty, page);
  }
}
