import 'src/components/User/userContact.scss';
import { useDispatch, useSelector } from 'react-redux';
import './user.scss';
import { useState } from 'react';
import { changeEditForm, addErrorMessage, deleteErrorMessage } from 'src/feature/user.slice';
import { updateUser } from 'src/AsyncChunk/AsyncChunkUser';
import Page from '../Page/Page';
import Field from './Field';
import {
  validateUpperCase, validateLength, validateDigit, validateScdPassword,
} from '../../utils/validatePassword';

function UserContact() {
  const {
    firstname, lastname, phone, email, password, sndPassword, oldPassword,
  } = useSelector((state) => state.user.user);
  const [isForm, setIsForm] = useState(false);
  const dispatch = useDispatch();

  const hiddenForm = !isForm ? 'hidden' : '';
  const hiddenLi = isForm ? 'hidden' : '';
  const handleChangeEditForm = (value, key) => {
    dispatch(changeEditForm([key, value]));
  };
  const { errorMessage } = useSelector((state) => state.user);
  const handleSubmit = (e) => {
    e.preventDefault();
    let isError = false;
    if (validateUpperCase(password) === false) {
      isError = true;
      dispatch(addErrorMessage('Il manque une majuscule'));
    }
    if (validateLength(password) === false) {
      isError = true;
      dispatch(addErrorMessage('Il faut au moins 6 charactères'));
    }
    if (validateDigit(password) === false) {
      isError = true;
      dispatch(addErrorMessage('Il manque un chiffre'));
    }
    if (validateScdPassword(password, sndPassword) === false) {
      isError = true;
      dispatch(addErrorMessage('Ce n\'est pas le même mot de passe'));
    }
    if (isError === true) {
      setTimeout(() => {
        dispatch(deleteErrorMessage());
      }, 2500);
    }
    if (isError === false) {
      dispatch(updateUser());
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
  return (
    <Page>
      <form
        onSubmit={handleSubmit}
        className="form"
      >
        <ul className="updateUserAccount">
          <div className="updateUserAccount container">
            <li className={`updateUserAccount list-item ${hiddenLi}`}>{firstname}</li>
            <Field
              className={`updateUserAccount input-item ${hiddenForm}`}
              name="firstname"
              type="text"
              value={firstname}
              onChange={handleChangeEditForm}
            />
          </div>
          <div className="updateUserAccount container">
            <li className={`updateUserAccount list-item ${hiddenLi}`}>{lastname}</li>
            <Field
              className={`updateUserAccount input-item ${hiddenForm}`}
              name="lastname"
              type="text"
              value={lastname}
              onChange={handleChangeEditForm}
            />
          </div>
          <div className="updateUserAccount container">
            <li className={`updateUserAccount list-item ${hiddenLi}`}>{phone}</li>
            <Field
              className={`updateUserAccount input-item ${hiddenForm}`}
              name="phone"
              type="text"
              value={phone}
              onChange={handleChangeEditForm}
            />
          </div>
          <div className="updateUserAccount container">
            <li className={`updateUserAccount list-item ${hiddenLi}`}>{email}</li>
            <Field
              className={`updateUserAccount input-item ${hiddenForm}`}
              name="email"
              type="text"
              autocomplete="username"
              value={email}
              onChange={handleChangeEditForm}
            />
          </div>
          <div className="updateUserAccount container">
            <Field
              className={`updateUserAccount input-item ${hiddenForm}`}
              name="oldPassword"
              type="password"
              placeholder="Ancien mot de passe"
              autocomplete="current-password"
              value={oldPassword}
              onChange={handleChangeEditForm}
            />
          </div>
          <div className="updateUserAccount container">
            <Field
              className={`updateUserAccount input-item ${hiddenForm}`}
              name="password"
              type="password"
              placeholder="Nouveau mot de passe"
              autocomplete="new-password"
              value={password}
              onChange={handleChangeEditForm}
            />
            <Field
              className={`updateUserAccount input-item ${hiddenForm}`}
              name="sndPassword"
              type="password"
              autocomplete="new-password"
              placeholder="Confirmez votre mot de passe"
              value={sndPassword}
              onChange={handleChangeEditForm}
            />
            <div className={`form-button-container ${hiddenForm}`}>
              <button
                type="submit"
                className="form-button"
              >
                <ion-icon name="chevron-down-circle-outline" />
              </button>
            </div>
          </div>
        </ul>
        <button
          className="updateUserAccount button"
          type="button"
          onClick={() => setIsForm(!isForm)}
        > {!isForm ? 'Mettre à jour mes informations' : 'Annuler'}
        </button>
      </form>
      {/* {errorMessage.length > 0 && <Error />} */}
    </Page>
  );
}

export default UserContact;
