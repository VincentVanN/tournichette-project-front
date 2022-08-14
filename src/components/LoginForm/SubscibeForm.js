import { useDispatch, useSelector } from 'react-redux';
import {
  setIsSubscribeForm, changeSubscribeForm,
} from '../../feature/user.slice';
import Field from './Field/Field';

function SubscibeForm() {
  const dispatch = useDispatch();
  const handleChangeSubscibeForm = (value, key) => {
    dispatch(changeSubscribeForm([key, value]));
  };
  const subscribeForm = useSelector((state) => state.user.subscribeForm);
  const FieldSubscribeName = Object.keys(subscribeForm);

  const handleSubscribe = () => {
    dispatch(setIsSubscribeForm());
  };
  const {
    firsname, lastname, email, phone, password, sndPassword,
  } = useSelector((state) => state.user.subscribeForm);
  console.log(FieldSubscribeName);
  return (
    <form onSubmit={handleSubscribe}>
      {FieldSubscribeName.map((fieldName) => (
        <Field
          name={fieldName}
          type={fieldName === 'sndPassword' ? 'password' : { fieldName }}
          value={fieldName}
          onChange={handleChangeSubscibeForm}
        />
      ))}
      <button type="submit">Envoyer</button>
    </form>
  );
}

export default SubscibeForm;
