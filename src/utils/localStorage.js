/* eslint-disable import/prefer-default-export */
export const setLocalStorage = (token) => localStorage.setItem('user', JSON.stringify({
  token,
}));
export const removeLocalStorage = (item) => localStorage.removeItem(item);
