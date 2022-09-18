import { apiOptions, checkResponse } from "./utils";

export default class Api {
  constructor(options) {
    this._token = options.baseUrl;
    this._authorization = options.headers.authorization;
    this._contentType = options.headers["Content-Type"];
  }

  //////////////////Setup User Info////////////////////////////////////
  getUserInfo() {
    return fetch(`${this._token}/users/me`, {
        method: 'GET',
        headers: {
          authorization: this._authorization
        }
      })
      .then(checkResponse);
  }
  /////////////////////////////////////////////////////////////////////

  //////////////////Setup Cards ///////////////////////////////////////
  getInitialCards() {
    return fetch(`${this._token}/cards`, {
        method: 'GET',
        headers: {
          authorization: this._authorization
        }
      })
      .then(checkResponse);
  }
  /////////////////////////////////////////////////////////////////////

  //////////////////Save user information ////////////////////////////
  saveUserInfo({ name, status }) {
    return fetch(`${this._token}/users/me`, {
        method: 'PATCH',
        headers: {
          authorization: this._authorization,
          'Content-Type': this._contentType
        },
        body: JSON.stringify({
          name: name,
          about: status
        })
      })
      .then(checkResponse);
  }
  /////////////////////////////////////////////////////////////////////

  //////////////////Add Card /////////////////////////////////////////
  addCard({ title, link }) {
    return fetch(`${this._token}/cards`, {
        method: 'POST',
        headers: {
          authorization: this._authorization,
          'Content-Type': this._contentType
        },
        body: JSON.stringify({
          name: title,
          link: link
        })
      })
      .then(checkResponse);
  }
  /////////////////////////////////////////////////////////////////////

  //////////////////Del Card /////////////////////////////////////////
  deleteCard(cardId) {
    return fetch(`${this._token}/cards/${cardId}`, {
        method: 'DELETE',
        headers: {
          authorization: this._authorization,
          'Content-Type': this._contentType
        }
      })
      .then(checkResponse);
  }
  /////////////////////////////////////////////////////////////////////

  //////////////////Add or delete Like  ///////////////////////////////
  changeLikeCardStatus(cardId, isLiked) {
    return fetch(`${this._token}/cards/likes/${cardId}`, {
      method: isLiked ? "PUT" : "DELETE",
      headers: {
        authorization: this._authorization,
        "Content-Type": this._contentType,
      },
    }).then(checkResponse);
  }
  /////////////////////////////////////////////////////////////////////

  //////////////////Edit Avatar////////////////////////////////////////
  editAvatar(link) {
    return fetch(`${this._token}/users/me/avatar`, {
        method: 'PATCH',
        headers: {
          authorization: this._authorization,
          'Content-Type': this._contentType
        },
        body: JSON.stringify({
          avatar: `${link}`
        })
      })
      .then(checkResponse);
  }
   /////////////////////////////////////////////////////////////////////
}

export const api = new Api(apiOptions);