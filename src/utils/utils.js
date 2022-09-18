export const apiOptions = {
  baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-46',
  headers: {
    authorization: '52b3031e-4bbf-4230-9679-707716e24a97',
    'Content-Type': 'application/json'
  }
};

export const baseUrl = "https://auth.nomoreparties.co";

export const checkResponse = (res) =>
  res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status}`);
