import logo from 'src/assets/logo.svg';
import { useDispatch, useSelector } from 'react-redux';
import { changeLoginForm, setIsSubscribe } from 'src/feature/user.slice';
import Field from './Field/Field';
import './loginForm.scss';
import SubscribeForm from './SubscribeForm';
import { loginUser } from '../../AsyncChunk/AsyncChunkUser';

function LoginForm() {
  const isSubscribe = useSelector((state) => state.user.isSubscribe);
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
    dispatch(setIsSubscribe(true));
  };
  return (

    <div className="form">
      {!isSubscribe && (
        <div className="form-container">
          <img className="form-logo" src={logo} alt="logo Tournichette" />
          <h1 className="form-title">Connexion</h1>
          <div className="form-field-container">
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
                  <ion-icon name="checkmark-circle-outline" style={{ fontSize: '3.5em' }} />
                </button>
                <div
                  className="form-signIn"
                  onClick={handleSubscribe}
                >
                  <ion-icon name="newspaper-outline" style={{ fontSize: '2.8em' }} />
                </div>
              </div>
            </form>
          </div>

        </div>

      )}
      {isSubscribe && <SubscribeForm />}

    </div>
  );
}

export default LoginForm;
