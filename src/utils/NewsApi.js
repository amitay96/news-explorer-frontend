class NewsApi {
  constructor({ baseUrl, apiKey }) {
    this._baseUrl = baseUrl;
    this._apiKey = apiKey;
  }

  _checkResponse(res) {
    console.log(res);
    return res.ok ? res.json() : Promise.reject(res.statusText);
  }

  getNews(keyword) {
    return fetch(
      `${this._baseUrl}${keyword}&apiKey=${this._apiKey}`
    ).then((res) => this._checkResponse(res));
  }
}

const newsApi = new NewsApi({
  baseUrl: "https://nomoreparties.co/news/v2/everything?q=",
  apiKey: "ff004cc9e6f2458298010ebb5f31edb5",
});

export default newsApi;
