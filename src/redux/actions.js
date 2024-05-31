export const SET_ACTIVE_LINK = 'SET_ACTIVE_LINK';
export const ADD_TO_FAVORITES = 'ADD_TO_FAVORITES';
export const REMOVE_FROM_FAVORITES = 'REMOVE_FROM_FAVORITES';

export const setActiveLink = (path) => ({
  type: SET_ACTIVE_LINK,
  payload: path,
});

export const addToFavorites = (filmId) => ({
  type: ADD_TO_FAVORITES,
  payload: filmId,
});

export const removeFromFavorites = (filmId) => ({
  type: REMOVE_FROM_FAVORITES,
  payload: filmId,
});
