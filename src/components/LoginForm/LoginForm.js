/* eslint-disable max-len */
import jwtDecode from 'jwt-decode';
import { useEffect } from 'react';
import logo from 'src/assets/logo.svg';
import { useDispatch, useSelector } from 'react-redux';
import { changeLoginForm, setIsSubscribe, setUserWithGoogle } from 'src/feature/user.slice';
import Field from './Field/Field';
import './loginForm.scss';
import SubscribeForm from './SubscribeForm';
import { loginUser, loginUserWithGoogle } from '../../AsyncChunk/AsyncChunkUser';
import Button from '../Button/Button';
import { setShowModal } from '../../feature/navigation.slice';

function LoginForm() {
  const isSubscribe = useSelector((state) => state.user.isSubscribe);
  const { username, password } = useSelector((state) => state.user.login);
  const loginWithGoogleRejected = useSelector((state) => state.navigation.loginWithGoogleRejected);
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
  //
  // globale google
  //
  let googleUser = null;
  function handleCallbackResponse(response) {
    googleUser = jwtDecode(response.credential);
    dispatch(setUserWithGoogle(googleUser));
    dispatch(loginUserWithGoogle());
  }
  useEffect(() => {
    // eslint-disable-next-line no-undef
    google.accounts.id.initialize({
      client_id: '1095458830535-c9ctnmdqptdrtre3ivfo2tkl78r0flom.apps.googleusercontent.com',
      callback: handleCallbackResponse,
    });
    // eslint-disable-next-line no-undef
    google.accounts.id.renderButton(
      document.getElementById('signInDiv'),
      { theme: 'outline', size: 'large' },
    );
  }, []);
  useEffect(() => {
    if (loginWithGoogleRejected === true) {
      dispatch(setShowModal(true));
    }
  }, [loginWithGoogleRejected]);
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
                value={username}
                onChange={handleChangeLogin}
              />
              <Field
                name="password"
                type="password"
                placeholder="Mot de passe"
                value={password}
                onChange={handleChangeLogin}
              />
              <div className="form-button-container">
                <button
                  type="submit"
                  className="form-button"
                >
                  <Button text="Valider" icon="checkmark-circle-outline" />
                </button>
                <div
                  className="form-signIn"
                  onClick={handleSubscribe}
                >
                  <ion-icon name="newspaper-outline" style={{ fontSize: '2.8em' }} />
                </div>
              </div>
              <div id="signInDiv" />
            </form>
          </div>
        </div>

      )}
      {isSubscribe && <SubscribeForm />}

    </div>
  );
}

export default LoginForm;
