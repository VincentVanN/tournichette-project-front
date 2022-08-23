import './loginForm.scss';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { changeSubscribeForm } from '../../feature/user.slice';
import {
  validateUpperCase, validateLength, validateDigit, validateScdPassword,
} from '../../feature/validatePassword';
import Field from './Field/Field';
import { createUser } from '../../AsyncChunk/AsyncChunkUser';

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
    dispatch(createUser());
    handleSubmit();
  };
  return (
    <>
      <h1 className="form-title">Inscription</h1>
      <form onSubmit={handleSubscribe}>
        <Field
          name="email"
          type="email"
          value={email}
          autocomplete="username"
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
          autocomplete="new-password"
          value={password}
          placeholder="Mot de passe"
          onChange={handleChangeSubscribeForm}
        />
        {password && (
        <div className="check-password">
          <div>
            <ion-icon name={`${validateLength(password) ? 'checkmark' : 'close'}-outline`} style={{ color: validateLength(password) ? 'green' : 'red' }} />
            <p>6 caractères</p>
          </div>
          <div>
            <ion-icon name={`${validateUpperCase(password) ? 'checkmark' : 'close'}-outline`} style={{ color: validateUpperCase(password) ? 'green' : 'red' }} />
            <p>1 majuscule</p>
          </div>
          <div>
            <ion-icon name={`${validateDigit(password) ? 'checkmark' : 'close'}-outline`} style={{ color: validateDigit(password) ? 'green' : 'red' }} />
            <p>1 chiffre</p>
          </div>

        </div>
        )}

        <Field
          name="sndPassword"
          type="password"
          autocomplete="new-password"
          value={sndPassword}
          placeholder="Confirmez votre mot de passe"
          onChange={handleChangeSubscribeForm}
        />
        <div className="form-button-container">
          <button
            type="submit"
            className="form-button"
          >
            <ion-icon name="chevron-down-circle-outline" />
          </button>
        </div>
      </form>
    </>

  );
}
SubscribeForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
};
export default SubscribeForm;

