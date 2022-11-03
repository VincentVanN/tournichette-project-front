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
import { setButtonText, setShowModal } from '../../feature/navigation.slice';
import SocialNetwork from '../SocialNetwork/SocialNetwork';

function LoginForm() {
  const isSubscribe = useSelector((state) => state.user.isSubscribe);
  const { username, password } = useSelector((state) => state.user.login);
  const loginWithGoogleRejected = useSelector((state) => state.navigation.loginWithGoogleRejected);
  const dispatch = useDispatch();
  const handleChangeLogin = (value, key) => {
    dispatch(changeLoginForm([key, value]));
  };
  const handleSubmit = () => {
    dispatch(loginUser());
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
      { theme: 'outline', size: 'large', dataShape: 'pill' },
    );
  }, [isSubscribe]);
  useEffect(() => {
    if (loginWithGoogleRejected === true) {
      dispatch(setButtonText('Valider'));
      dispatch(setShowModal(true));
    }
  }, [loginWithGoogleRejected]);
  return (

    <div className="form">
      {!isSubscribe && (
        <div className="form-container">
          <div className="tab">
            <div
              className="tab-singIn"
              onClick={() => dispatch(setIsSubscribe(false))}
              {...((!isSubscribe) && {
                style: {
                  color: '#fd7c55', border: 'none', fontWeight: '500', background: 'none', opacity: '1', cursor: 'default',
                },
              })}
            >
              <p
                {...((!isSubscribe) && {
                  style: {
                    opacity: 1,
                  },
                })}
              >
                CONNEXION
              </p>
            </div>
            <div
              className="tab-signUp"
              onClick={() => dispatch(setIsSubscribe(true))}
              {...((isSubscribe) && {
                style: {
                  color: '#fd7c55', border: 'none', fontWeight: '500', background: 'none', opacity: '1', cursor: 'default',
                },
              })}
            >
              <p>
                INSCRIPTION
              </p>
            </div>
          </div>
          <img className="form-logo" src={logo} alt="logo Tournichette" />
          <div className="form-field-container">
            <h2 className="googleTitle">Connexion via Google </h2>
            <div id="signInDiv" />
            <h2 className="form-title">Connexion</h2>
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
                <Button
                  text="Valider"
                  icon="checkmark-circle-outline"
                  onClick={() => handleSubmit()}
                />
              </div>
            </form>
          </div>
          <SocialNetwork />
        </div>

      )}
      {isSubscribe && <SubscribeForm />}

    </div>
  );
}

export default LoginForm;
