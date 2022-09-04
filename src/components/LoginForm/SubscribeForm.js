import './loginForm.scss';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import {
  addErrorMessage, changeSubscribeForm,
} from '../../feature/user.slice';
import {
  validateUpperCase, validateLength, validateDigit, validateScdPassword, isValidEmail,
} from '../../utils/validatePassword';
import Field from './Field/Field';
import { createUser } from '../../AsyncChunk/AsyncChunkUser';
import { setButtonText, setRedirection, setShowModal } from '../../feature/navigation.slice';

function SubscribeForm({ handleSubmit }) {
  const {
    firstname, lastname, phone, email, password, sndPassword,
  } = useSelector((state) => state.user.user);
  const dispatch = useDispatch();
  const handleChangeSubscribeForm = (value, key) => {
    dispatch(changeSubscribeForm([key, value]));
  };
  const width = useSelector((state) => state.navigation.width);
  const handleReturn = () => handleSubmit();
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
      dispatch(setButtonText('ok!'));
      dispatch(setShowModal(true));
    }
    if (isError === false) {
      dispatch(setButtonText('Connexion'));
      dispatch(setRedirection('/'));
      dispatch(createUser());
      dispatch(setShowModal(true));
    }
  };

  return (
    <div className="subscribe-container">
      <h1 className="form-title">Inscription</h1>
      <div className="form-field-container">
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
          <Field
            name="sndPassword"
            type="password"
            autocomplete="new-password"
            value={sndPassword}
            placeholder="Confirmation mdp"
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
        {(password && width > 1024) && (
        <div className="check-password">
          <div className="checkbox">
            <ion-icon name={`${validateLength(password) ? 'checkmark' : 'close'}-outline`} style={{ color: validateLength(password) ? 'green' : 'red' }} />
            <p>6 caractères</p>
          </div>
          <div className="checkbox">
            <ion-icon name={`${validateUpperCase(password) ? 'checkmark' : 'close'}-outline`} style={{ color: validateUpperCase(password) ? 'green' : 'red' }} />
            <p>1 majuscule</p>
          </div>
          <div className="checkbox">
            <ion-icon name={`${validateDigit(password) ? 'checkmark' : 'close'}-outline`} style={{ color: validateDigit(password) ? 'green' : 'red' }} />
            <p>1 chiffre</p>
          </div>

        </div>
        )}

      </div>
    </div>
  );
}
SubscribeForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
};
export default SubscribeForm;
