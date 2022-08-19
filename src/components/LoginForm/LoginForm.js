import { useDispatch, useSelector } from 'react-redux';
import karine from 'src/components/LoginForm/Field/karine.jpg';
import {
  changeLoginForm, setIsSubscribeForm,
} from '../../feature/user.slice';
import Field from './Field/Field';
import './loginForm.scss';
import SubscribeForm from './SubscribeForm';
import { selectPlaceholder, selectType } from '../../utils/setupFields';
import { loginUser } from '../../AsyncChunk/AsyncChunkUser';

function LoginForm() {
  const loginForm = useSelector((state) => state.user.login);
  const { username, password } = useSelector((state) => state.user.login);
  const FieldloginName = Object.keys(loginForm);
  console.log(FieldloginName);
  const dispatch = useDispatch();
  const handleChangeLogin = (value, key) => {
    dispatch(changeLoginForm([key, value]));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(loginUser());
  };
  const handleSubscribe = () => {
    dispatch(setIsSubscribeForm());
  };
  const isSubscribe = useSelector((state) => state.user.isSubscribeForm);
  return (

    <div className="form">
      <img src={karine} className="background" alt="image_karine" />
      {!isSubscribe && (
        <form className="form_input" onSubmit={handleSubmit}>
          {FieldloginName.map((fieldName) => (
            <Field
              stateName="login"
              key={fieldName}
              name={fieldName}
              type={selectType((fieldName === 'username') ? username : password)}
              placeholder={selectPlaceholder(fieldName)}
              value={(fieldName === 'username') ? username : password}
              onChange={handleChangeLogin}
            />
          ))}
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
      {isSubscribe && <SubscribeForm />}
    </div>
  );
}

export default LoginForm;
