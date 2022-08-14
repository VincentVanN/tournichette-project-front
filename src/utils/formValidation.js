import { useSelector } from 'react-redux';

// eslint-disable-next-line import/prefer-default-export
export const isValidEmail = (nameState) => {
  const email = useSelector((state) => state.user[nameState].email);
  return /\S+@\S+\.\S+/.test(email);
};
