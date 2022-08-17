/* eslint-disable import/prefer-default-export */
export const setLocalStorage = (email, slug, token) => localStorage.setItem('user', JSON.stringify({
  email,
  slug,
  token,
}));
export const removeLocalStorage = (item) => localStorage.removeItem(item);
