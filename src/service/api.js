import axios from "axios";

export default class Api {
  constructor() {
    this.key = "9968633-69c1320fae33e8ec0bca60a09";
  }

  fetchData(qurty, page) {
    const url = `https://pixabay.com/api/?image_type=photo&q=${qurty}&per_page=12&page=${page}&key=${
      this.key
    }`;

    return axios
      .get(url)
      .then(response => response.data.hits)
      .catch(err => console.log(err));
  }
}
