/* eslint-disable import/prefer-default-export */
export const setLocalStorage = (firstname, slug, token) => localStorage.setItem('user', JSON.stringify({
  firstname,
  slug,
  token,
}));
export const removeLocalStorage = (item) => localStorage.removeItem(item);
