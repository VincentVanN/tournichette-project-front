import './loginForm.scss';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import {
  addErrorMessage, changeSubscribeForm, deleteErrorMessage, deleteServerMessageOnSubscribe,
} from '../../feature/user.slice';
import {
  validateUpperCase, validateLength, validateDigit, validateScdPassword, isValidEmail,
} from '../../utils/validatePassword';
import Field from './Field/Field';
import { createUser } from '../../AsyncChunk/AsyncChunkUser';

function SubscribeForm({ handleSubmit }) {
  const {
    firstname, lastname, phone, email, password, sndPassword,
  } = useSelector((state) => state.user.user);
  const { errorMessage } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const handleChangeSubscribeForm = (value, key) => {
    dispatch(changeSubscribeForm([key, value]));
  };
  const handleReturn = () => handleSubmit();
  const serverMessageOnSubscribe = useSelector((state) => state.user.serverMessageOnSubscribe);
  const handleSubscribe = (e) => {
    e.preventDefault();
    let isError = false;
    if (firstname === '') {
      isError = true;
      dispatch(addErrorMessage('Prénom obligatoire'));
    }
    if (lastname === '') {
      isError = true;
      dispatch(addErrorMessage('Nom obligatoire'));
    }
    if (phone === '') {
      isError = true;
      dispatch(addErrorMessage('Téléphone obligatoire'));
    }
    if (isValidEmail(email) === false) {
      isError = true;
      dispatch(addErrorMessage('L\'email non valide'));
    }
    if (validateUpperCase(password) === false) {
      isError = true;
      dispatch(addErrorMessage('une majuscule au mot de passe'));
    }
    if (validateLength(password) === false) {
      isError = true;
      dispatch(addErrorMessage('Mot de passe de 6 caractères'));
    }
    if (validateDigit(password) === false) {
      isError = true;
      dispatch(addErrorMessage('Un chiffre au mot de passe'));
    }
    if (validateScdPassword(password, sndPassword) === false) {
      isError = true;
      dispatch(addErrorMessage('Mots de passe différents'));
    }
    if (isError === true) {
      setTimeout(() => {
        dispatch(deleteErrorMessage());
      }, 3000);
    }
    if (isError === false) {
      dispatch(createUser());
      setTimeout(() => {
        dispatch(deleteServerMessageOnSubscribe());
        handleSubmit();
      }, 10000);
    }
  };
  if (errorMessage.length !== 0) {
    return (
      <div className="errorMessage-container">
        <ul className="errorMessage-list">
          {errorMessage.map((error) => (
            <li className="errorMessage-li">
              <ion-icon name="close-circle-outline" style={{ color: '#f88e6d', fontSize: '40px' }} />
              <p className="errorMessage">{error}</p>
            </li>
          ))}
        </ul>
      </div>
    );
  }
  if (serverMessageOnSubscribe) {
    return (
      <div className="serverMessage-container">
        <div className="serverMessage">{serverMessageOnSubscribe}</div>
      </div>
    );
  }
  return (
    <div className="form-field-container">
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
          <ion-icon
            name="arrow-undo-circle-outline"
            onClick={handleReturn}
          />
          <button
            type="submit"
            className="form-button"
          >
            <ion-icon name="chevron-down-circle-outline" />
          </button>
        </div>
      </form>
    </div>

  );
}
SubscribeForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
};
export default SubscribeForm;
