class Api {
  constructor({ baseUrl, headers }) {
    this._baseUrl = baseUrl;
    this._headers = headers;
  }

  _checkResponse(res) {
    return res.ok ? res.json() : Promise.reject(res.statusText);
  }

  async _request(url, headers) {
    return fetch(url, headers).then(this._checkResponse);
  }

  checkToken(token) {
    return this._request(`${this._baseUrl}/users/me`, {
      headers: {
        authorization: `Bearer ${token}`,
      },
    });
  }

  register(user) {
    return this._request(`${this._baseUrl}/signup`, {
      headers: {
        ...this._headers,
      },
      method: "POST",
      body: JSON.stringify({
        email: user.email,
        password: user.password,
        name: user.name,
      }),
    });
  }

  login(user) {
    return this._request(`${this._baseUrl}/signin`, {
      headers: {
        ...this._headers,
      },
      method: "POST",
      body: JSON.stringify({
        email: user.email,
        password: user.password,
      }),
    });
  }

  getUserInfo(token) {
    return this._request(`${this._baseUrl}/users/me`, {
      headers: {
        ...this._headers,
        authorization: `Bearer ${token}`,
      },
    });
  }

  getSavedArticles(token) {
    return this._request(`${this._baseUrl}/articles`, {
      headers: {
        ...this._headers,
        authorization: `Bearer ${token}`,
      },
    });
  }

  saveArticle(article, token) {
    return this._request(`${this._baseUrl}/articles`, {
      headers: {
        ...this._headers,
        authorization: `Bearer ${token}`,
      },
      method: "POST",
      body: JSON.stringify(article),
    });
  }

  deleteArticle(articleId, token) {
    return this._request(`${this._baseUrl}/articles/${articleId}`, {
      headers: {
        ...this._headers,
        authorization: `Bearer ${token}`,
      },
      method: "DELETE",
    });
  }
}

let node_env = "production";

let base_url =
  !node_env === "production"
    ? "https://api.amitay.students.nomoredomainssbs.ru"
    : "http://localhost:3000";

const UserApi = new Api({
  baseUrl: base_url,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

export default UserApi;
