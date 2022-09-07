import logo from 'src/assets/logo.svg';
import './loginForm.scss';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  addErrorMessage, changeSubscribeForm, setIsSubscribe,
} from '../../feature/user.slice';
import {
  validateUpperCase, validateLength, validateDigit, validateScdPassword, isValidEmail,
} from '../../utils/validatePassword';
import Field from './Field/Field';
import { createUser } from '../../AsyncChunk/AsyncChunkUser';
import { setButtonText, setRedirection, setShowModal } from '../../feature/navigation.slice';

function SubscribeForm() {
  const {
    firstname, lastname, phone, email, password, sndPassword,
  } = useSelector((state) => state.user.user);
  const dispatch = useDispatch();
  const handleChangeSubscribeForm = (value, key) => {
    dispatch(changeSubscribeForm([key, value]));
  };
  const [isFocusPassword, setIsFocusPassword] = useState(false);
  const [isFocusScdPassword, setIsFocusScdPassword] = useState(false);
  const width = useSelector((state) => state.navigation.width);
  const handleReturn = () => dispatch(setIsSubscribe(false));
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
    <div className="form-container">
      <img className="form-logo" src={logo} alt="logo Tournichette" />
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
            onFocus={() => setIsFocusPassword(true)}
            onBlur={() => setIsFocusPassword(false)}
            value={password}
            placeholder="Mot de passe"
            onChange={handleChangeSubscribeForm}
          />
          <Field
            name="sndPassword"
            type="password"
            autocomplete="new-password"
            onFocus={() => setIsFocusScdPassword(true)}
            onBlur={() => setIsFocusScdPassword(false)}
            value={sndPassword}
            placeholder="Confirmation mdp"
            onChange={handleChangeSubscribeForm}
          />
          <div className="form-button-container">
            <ion-icon
              name="arrow-undo-circle-outline"
              style={{ fontSize: '3em' }}
              onClick={handleReturn}
            />
            <button
              type="submit"
              className="form-button"
            >
              <ion-icon name="checkmark-circle-outline" style={{ fontSize: '3.5em' }} />
            </button>
          </div>
        </form>
        <AnimatePresence mode="wait">
          {(isFocusPassword && width > 724) && (
          <motion.div
            className="check-password"
            key="password"
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1, zIndex: 0 }}
            exit={{ x: 120, opacity: 0, zIndex: 0 }}
          >
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
          </motion.div>
          )}
          {(isFocusScdPassword && width > 724) && (
          <motion.div
            className="check-password"
            key="scdPassword"
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: 120, opacity: 0 }}
          >
            <div className="checkbox">
              <ion-icon name={`${validateScdPassword(password, sndPassword) ? 'checkmark' : 'close'}-outline`} style={{ color: validateScdPassword(password, sndPassword) ? 'green' : 'red' }} />
              <p>{validateScdPassword(password, sndPassword) ? 'Mdp identiques!' : 'Mdp différents'}</p>
            </div>
          </motion.div>
          )}
        </AnimatePresence>

      </div>
    </div>
  );
}

export default SubscribeForm;
