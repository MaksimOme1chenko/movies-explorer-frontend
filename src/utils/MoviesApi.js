class MoviesApi {
    constructor({ baseUrl, headers }) {
        this._url = baseUrl;
        this._headers = headers;
    }
    _checkResponse(res){
        if(res.ok) {
          return res.json();
        }
        return Promise.reject(`Ошибка ${res.status}`)
      }

      getMovies() {
        return fetch(`${this._url}`, {
          method: 'GET',
          headers: this._headers, 
        }).then(this._checkResponse)
      }
}

const moviesApi = new MoviesApi({
        baseUrl: "https://api.nomoreparties.co/beatfilm-movies",
        headers: {
            'Content-Type': 'application/json'
        }
})
export default moviesApi