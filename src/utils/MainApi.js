class MainApi {
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

    getUserData() {
        return fetch(`${this._url}/users/me`, {
            headers: this._headers,
            credentials: 'include', 
        }).then(this._checkResponse)
    }

    updateUserdata(data) {
        return fetch(`${this._url}/users/me`, {
            method: 'PATCH',
            headers: this._headers,
            body: JSON.stringify({
                name: data.name,
                email: data.email,
            }),
            credentials: 'include', 
        }).then(this._checkResponse)
    }

    getSavedMovies(){
        return fetch(`${this._url}/movies`,{
            method: "GET",
            headers: this._headers,
            credentials: "include"

        }).then(this._checkResponse)
    }

   postSaveMovie(movie){
        return fetch(`${this._url}/movies`, {
          method: 'POST',
          headers: this._headers,
          credentials: "include",
          body: JSON.stringify({
            country: movie.country,
            director: movie.director,
            duration: movie.duration,
            year: movie.year,
            description: movie.description,
            image: `https://api.nomoreparties.co/${movie.image.url}`,
            trailerLink: movie.trailerLink,
            thumbnail: `https://api.nomoreparties.co${movie.image.formats.thumbnail.url}`,
            movieId: movie.id,
            nameRU: movie.nameRU,
            nameEN: movie.nameEN,
          }),
        }).then(this._checkResponse)
      };

      deleteSaveMovie(movieId){
        return fetch(`${this._url}/movies/${movieId}`, {
            method: 'DELETE',
            headers: this._headers,
            credentials: "include",
        }).then(this._checkResponse)
      }

    register(name, email, password) {
        return fetch(`${this._url}/signup`,{
            method: 'POST',
            headers: this._headers,
            body: JSON.stringify( name, email, password ),
            credentials: "include",
        }).then(this._checkResponse)
    }

    authorize(email, password){
        return fetch(`${this._url}/signin`, {
          method: 'POST',
          headers: this._headers,
          credentials: "include",
          body: JSON.stringify( email, password )
        }).then(this._checkResponse)

}
    signout(){
        return fetch(`${this._url}/signout`, {
            method: "POST",
            headers: this._headers,
            credentials: "include",
        }).then(this._checkResponse)
    }
}
const mainApi = new MainApi({
    baseUrl: 'https://api.spanko.movies.nomoredomains.rocks',
    headers: {
        'Content-Type': 'application/json'
    }
})
export default mainApi