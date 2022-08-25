import { useState } from 'react';
import logo from 'src/assets/logo.svg';
import { useDispatch, useSelector } from 'react-redux';
import { changeLoginForm } from 'src/feature/user.slice';
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
      <div className="form-container">
        <div className="image-container">
          <img className="form-logo" src={logo} alt="logo Tournichette" />
        </div>
        {!isSubscribe && (
        <div className="form-field-container">
          <h1 className="form-title">Connexion</h1>
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
        </div>

        )}
        {isSubscribe && <SubscribeForm handleSubmit={handleSubscribe} />}
      </div>

    </div>
  );
}

export default LoginForm;
