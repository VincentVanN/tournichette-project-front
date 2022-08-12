import { useSelector, useDispatch } from 'react-redux';
import { changeLoginField, logout, login } from '../../feature/user.slice';
import Field from './Field/Field';
import './loginForm.scss';

function LoginForm() {
  const dispatch = useDispatch();

  const { logged, pseudo } = useSelector((state) => state.user);
  const { email, password } = useSelector((state) => state.user.loginForm);

  const handleChangeLoginField = (value, key) => {
    dispatch(changeLoginField(value, key));
  };

  const handleLogin = () => {
    dispatch(login());
  };

  const handleLogout = () => {
    dispatch(logout());
  };
  const handleSubmit = (evt) => {
    evt.preventDefault();
    handleLogin();
  };

  return (
    <div className="login-form">
      {(logged) && (
        <div className="login-form-logged">
          <p className="login-form-message">
            {`Hello ${pseudo}!`}
          </p>
          <button
            type="button"
            className="login-form-button"
            onClick={handleLogout}
          >
            Déconnexion
          </button>
        </div>
      )}
      {(!logged) && (

        <form autoComplete="off" className="login-form-element" onSubmit={handleSubmit}>
          <Field
            name="email"
            placeholder="Adresse Email"
            onChange={handleChangeLoginField}
            value={email}
          />
          <Field
            name="password"
            type="password"
            placeholder="Mot de passe"
            onChange={handleChangeLoginField}
            value={password}
          />
          <button
            type="submit"
            className="login-form-button"
          >
            OK
          </button>
        </form>
      )}
    </div>
  );
}

export default LoginForm;
