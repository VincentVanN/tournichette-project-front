import { useState } from 'react';
import logo from 'src/assets/logo.svg';
import { useDispatch, useSelector } from 'react-redux';
import { changeLoginForm } from '../../feature/user.slice';
import Field from './Field/Field';
import './loginForm.scss';
import SubscribeForm from './SubscribeForm';
import { loginUser } from '../../AsyncChunk/AsyncChunkUser';

function LoginForm() {
  const [isSubscribe, setIsSubscribe] = useState(false);
  const { username, password } = useSelector((state) => state.user.login);
  const dispatch = useDispatch();
  const handleChangeLogin = (value, key) => {
    dispatch(changeLoginForm([key, value]));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(loginUser());
  };
  const handleSubscribe = () => {
    dispatch(setIsSubscribe(!isSubscribe));
  };
  return (

    <div className="form">
      <img className="form-logo" src={logo} alt="logo Tournichette" />
      {!isSubscribe && (
        <form onSubmit={handleSubmit}>
          <Field
            name="username"
            type="text"
            placeholder="Email"
            autocomplete="username"
            value={username}
            onChange={handleChangeLogin}
          />
          <Field
            name="password"
            type="password"
            autocomplete="current-password"
            placeholder="Mot de passe"
            value={password}
            onChange={handleChangeLogin}
          />
          <div className="form-button-container">
            <button
              type="submit"
              className="form-button"
            >
              <ion-icon name="chevron-down-circle-outline" />
            </button>
            <div
              className="form-signIn"
              onClick={handleSubscribe}
            >
              <ion-icon name="newspaper-outline" />
            </div>
          </div>

        </form>
      )}
      {isSubscribe && <SubscribeForm handleSubmit={handleSubscribe} />}
    </div>
  );
}

export default LoginForm;
