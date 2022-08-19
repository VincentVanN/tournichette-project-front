import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { changeSubscribeForm } from '../../feature/user.slice';
import Field from './Field/Field';

function SubscribeForm({ handleSubmit }) {
  const {
    firstname, lastname, phone, email, password, sndPassword,
  } = useSelector((state) => state.user.user);
  const dispatch = useDispatch();
  const handleChangeSubscribeForm = (value, key) => {
    dispatch(changeSubscribeForm([key, value]));
  };

  const handleSubscribe = (e) => {
    e.preventDefault();
    handleSubmit();
  };
  return (

    <form onSubmit={handleSubscribe}>
      <Field
        name="email"
        type="email"
        value={email}
        placeholder="Email"
        onChange={handleChangeSubscribeForm}
      />
      <Field
        name="firstname"
        type="text"
        value={firstname}
        placeholder="Prénom"
        onChange={handleChangeSubscribeForm}
      />
      <Field
        name="lastname"
        type="text"
        value={lastname}
        placeholder="Nom"
        onChange={handleChangeSubscribeForm}
      />
      <Field
        name="phone"
        type="text"
        value={phone}
        placeholder="Téléphone"
        onChange={handleChangeSubscribeForm}
      />
      <Field
        name="password"
        type="password"
        value={password}
        placeholder="Mot de passe"
        onChange={handleChangeSubscribeForm}
      />
      <Field
        name="sndPassword"
        type="password"
        value={sndPassword}
        placeholder="Confirmez votre mot de passe"
        onChange={handleChangeSubscribeForm}
      />
      <button type="submit">Envoyer</button>
    </form>
  );
}
SubscribeForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
};
export default SubscribeForm;
