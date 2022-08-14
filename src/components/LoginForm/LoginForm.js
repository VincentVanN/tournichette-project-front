import { useDispatch, useSelector } from 'react-redux';
import {
  changeLoginForm, login, setIsSubscribeForm,
} from '../../feature/user.slice';
import Field from './Field/Field';
import './loginForm.scss';
import SubscibeForm from './SubscibeForm';
import { selectPlaceholder } from '../../utils/setupFields';

function LoginForm() {
  const loginForm = useSelector((state) => state.user.login);
  const { email, password } = useSelector((state) => state.user.login);
  const FieldloginName = Object.keys(loginForm);
  const dispatch = useDispatch();

  const handleChangeLogin = (value, key) => {
    dispatch(changeLoginForm([key, value]));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(login());
  };
  const handleSubscribe = () => {
    dispatch(setIsSubscribeForm());
  };
  const isSubscribe = useSelector((state) => state.user.isSubscribeForm);

  return (
    <div className="form">
      {!isSubscribe && (
      <form onSubmit={handleSubmit}>
        {FieldloginName.map((fieldName) => (
          <Field
            key={fieldName}
            name={fieldName}
            type={fieldName}
            placeholder={selectPlaceholder(fieldName)}
            value={(fieldName === 'email') ? email : password}
            onChange={handleChangeLogin}
          />
        ))}
        <button type="submit">Envoyer</button>
        <div
          className="signIn"
          onClick={handleSubscribe}
        >inscription
        </div>
      </form>
      )}
      {isSubscribe && <SubscibeForm />}
    </div>
  );
}

export default LoginForm;
