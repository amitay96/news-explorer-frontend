class NewsApi {
  constructor({ baseUrl, apiKey }) {
    this._baseUrl = baseUrl;
    this._apiKey = apiKey;
    this._time = new Date();
  }

  _checkResponse(res) {
    return res.ok ? res.json() : Promise.reject(res.statusText);
  }

  _getLastWeek() {
    return new Date(
      this._time.getFullYear(),
      this._time.getMonth(),
      this._time.getDay() - 7
    );
  }

  getNews(keyword) {
    const lastWeek = this._getLastWeek();
    return fetch(
      `${this._baseUrl}${keyword}&from=${lastWeek}&to=${this._time}&pageSize=100&apiKey=${this._apiKey}`
    ).then((res) => this._checkResponse(res));
  }
}

const newsApi = new NewsApi({
  baseUrl: "https://nomoreparties.co/news/v2/everything?q=",
  apiKey: "ff004cc9e6f2458298010ebb5f31edb5",
});

export default newsApi;
