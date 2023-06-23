export class Api {
  #baseurl;

  #headers;

  constructor({ baseUrl, headers }) {
    this.#baseurl = baseUrl;
    this.#headers = headers;
  }

  #onResponse(res) {
    return res.ok ? res.json() : res.json().then((err) => Promise.reject(err));
  }

  getAllPosts() {
    return fetch(`${this.#baseurl}/posts`, {
      headers: {
        ...this.#headers,
      },
    }).then(this.#onResponse);
  }
}

const api = new Api({
  baseUrl: 'http://localhost:3001',
  headers: {
    'content-type': 'application/json',
  },
});

export default api;
