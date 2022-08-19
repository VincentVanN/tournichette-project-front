import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import karine from 'src/components/LoginForm/Field/karine.jpg';
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
      <img src={karine} className="background" alt="image_karine" />
      {!isSubscribe && (
        <form className="form_input" onSubmit={handleSubmit}>
          <Field
            name="username"
            type="email"
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
          <button
            type="submit"
          >Envoyer
          </button>
          <div
            className="form_signIn"
            onClick={handleSubscribe}
          >inscription
          </div>
        </form>
      )}
      {isSubscribe && <SubscribeForm handleSubmit={handleSubscribe} />}
    </div>
  );
}

export default LoginForm;
