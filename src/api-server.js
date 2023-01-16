import axios from 'axios';

const API_KEY = '31544306-98c50720df0af9d375614fc16';
const BASE_URL = 'https://pixabay.com/api/';

export default class ImagesApiServer {
  constructor() {
    this.userSearch = '';
    this.page = 1;
  }
  async fetchRequest() {
    const response = await axios.get(
      `${BASE_URL}?key=${API_KEY}&q=${this.userSearch}&image_type=photo&orientation=horizontal&safesearch=true&page=${this.page}&per_page=40`
    );
    this.page += 1;
    return response.data;
  }

  get query() {
    return this.userSearch;
  }

  set query(newQuery) {
    this.userSearch = newQuery;
  }

  resetPage() {
    this.page = 1;
  }
}