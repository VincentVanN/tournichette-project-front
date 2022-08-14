/* eslint-disable import/prefer-default-export */
import { useSelector } from 'react-redux';

export const selectValue = (fieldName) => {
  const {
    firstname, lastname, email, phone, password, sndPassword,
  } = useSelector((state) => state.user.subscribeForm);

  if (fieldName === 'firstname') {
    return firstname;
  }
  if (fieldName === 'lastname') {
    return lastname;
  }
  if (fieldName === 'email') {
    return email;
  }
  if (fieldName === 'phone') {
    return phone;
  }
  if (fieldName === 'password') {
    return password;
  }
  if (fieldName === 'sndPassword') {
    return sndPassword;
  }
  return false;
};
export const selectPlaceholder = (fieldName) => {
  if (fieldName === 'firstname') {
    return 'Prénom';
  }
  if (fieldName === 'lastname') {
    return 'Nom';
  }
  if (fieldName === 'email') {
    return 'Email';
  }
  if (fieldName === 'phone') {
    return 'Téléphone';
  }
  if (fieldName === 'password') {
    return 'Mot de passe';
  }
  if (fieldName === 'sndPassword') {
    return 'Confirmez votre mot de passe';
  }
  return false;
};
export const selectType = (fieldName) => {
  if (fieldName === 'firstname') {
    return 'text';
  }
  if (fieldName === 'lastname') {
    return 'text';
  }
  if (fieldName === 'email') {
    return 'Email';
  }
  if (fieldName === 'phone') {
    return 'text';
  }
  if (fieldName === 'password') {
    return 'password';
  }
  if (fieldName === 'sndPassword') {
    return 'password';
  }
  return false;
};
