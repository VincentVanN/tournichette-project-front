import { useDispatch, useSelector } from 'react-redux';
import {
  setIsSubscribeForm, changeSubscribeForm,
} from '../../feature/user.slice';
import Field from './Field/Field';
import { selectValue, selectPlaceholder, selectType } from '../../utils/setupFields';

function SubscribeForm() {
  const dispatch = useDispatch();
  const handleChangeSubscribeForm = (value, key) => {
    dispatch(changeSubscribeForm([key, value]));
  };
  const subscribeForm = useSelector((state) => state.user.subscribeForm);
  const FieldSubscribeName = Object.keys(subscribeForm);

  const handleSubscribe = (e) => {
    e.preventDefault();
    dispatch(setIsSubscribeForm());
  };

  return (

    <form onSubmit={handleSubscribe}>
      {FieldSubscribeName.map((fieldName) => (
        <Field
          stateName="subscribeForm"
          key={fieldName}
          name={fieldName}
          type={selectType(fieldName)}
          value={selectValue(fieldName)}
          placeholder={selectPlaceholder(fieldName)}
          onChange={handleChangeSubscribeForm}
        />
      ))}
      <button type="submit">Envoyer</button>
    </form>
  );
}

export default SubscribeForm;
