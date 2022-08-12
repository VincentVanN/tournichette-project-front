/* eslint-disable import/prefer-default-export */
export const setLocalStorage = (slug, token) => localStorage.setItem('user', JSON.stringify({
  slug,
  token,
}));
