 class Api {
    constructor(options) {
      // тело конструктора
      this._baseUrl = options.baseUrl;
      this._headers = options.headers;
    }

    removeLike(id){
      return fetch(`${this._baseUrl}/cards/${id}/likes`, {
        method: 'DELETE',
        headers: {
          authorization:  this._headers.authorization
    }
    })
    .then((res) => {
        if (res.ok) {
          return res.json();
        } 
         return Promise.reject(`Ошибка: ${res.status}`);
      });
    }

    addLike(id){
      return fetch(`${this._baseUrl}/cards/${id}/likes`, {
        method: 'PUT',
        headers: {
          authorization:  this._headers.authorization
    }
    })
    .then((res) => {
        if (res.ok) {
          return res.json();
        } 
         return Promise.reject(`Ошибка: ${res.status}`);
      });
    }

    getUserInfo (){
        return fetch(`${this._baseUrl}/users/me`, {
            headers: {
                authorization:  this._headers.authorization
          }
        })
        .then((res) => {
            if (res.ok) {
              return res.json();
            } 
             return Promise.reject(`Ошибка: ${res.status}`);
          });
    }

    setUserInfo(name, about){
      return fetch(`${this._baseUrl}/users/me`, {
        method: 'PATCH',
        headers: this._headers,
        body: JSON.stringify({name: name, about: about})
    })
    .then((res) => {
        if (res.ok) {
          return res.json();
        } 
         return Promise.reject(`Ошибка: ${res.status}`);
      });
    }

    setUserAvatar(url){
      return fetch(`${this._baseUrl}/users/me/avatar`, {
        method: 'PATCH',
        headers: this._headers,
        body: JSON.stringify({avatar: url})
    })
    .then((res) => {
        if (res.ok) {
          return res.json();
        } 
         return Promise.reject(`Ошибка: ${res.status}`);
      });
    }

    addNewCard(name, link){
      return fetch(`${this._baseUrl}/cards`, {
        method: 'POST',
        headers: this._headers,
        body: JSON.stringify({name: name, link: link})
    })
    .then((res) => {
        if (res.ok) {
          return res.json();
        } 
         return Promise.reject(`Ошибка: ${res.status}`);
      });
    }

    deleteCard(id){
      return fetch(`${this._baseUrl}/cards/${id}`, {
        method: 'DELETE',
        headers: {
          authorization:  this._headers.authorization
    }
    })
    .then((res) => {
        if (res.ok) {
          return res.json();
        } 
         return Promise.reject(`Ошибка: ${res.status}`);
      });
    }
    
    getInitialCards() {
        return fetch(`${this._baseUrl}/cards`, {
          headers: {
            authorization:  this._headers.authorization
          }
        })
          .then((res) => {
            if (res.ok) {
              return res.json();
            }
            return Promise.reject(`Ошибка: ${res.status}`);
          });
      }
  }

  export default Api;
 
