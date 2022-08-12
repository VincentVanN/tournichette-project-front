import { useDispatch, useSelector } from 'react-redux';
import { changeLoginEmail, changeLoginPassword, login } from '../../feature/user.slice';
import './loginForm.scss';

function LoginForm() {
  const { email, password } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const handleChangeEmail = (e) => {
    dispatch(changeLoginEmail(e.target.value));
  };
  const handleChangePassword = (e) => {
    dispatch(changeLoginPassword(e.target.value));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(login());
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="email"
        value={email}
        placeholder="entrez votre email"
        onChange={handleChangeEmail}
      />
      <input
        type="password"
        placeholder="entrez votre mot de passe"
        value={password}
        onChange={handleChangePassword}
      />
      <button type="submit">Envoyer</button>
    </form>
  );
}

export default LoginForm;
