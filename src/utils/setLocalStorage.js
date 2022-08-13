/* eslint-disable import/prefer-default-export */
export const setLocalStorage = (slug, token, firstname) => localStorage.setItem('user', JSON.stringify({
  slug,
  token,
  firstname,
}));
