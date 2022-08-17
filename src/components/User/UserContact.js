import { useDispatch, useSelector } from 'react-redux';
import './user.scss';
import { useState } from 'react';
import Page from '../Page/Page';
import { changeProfilForm } from '../../feature/user.slice';
import Field from './Field';

function UserContact() {
  const {
    firstname, lastname, phone, email, password, sndPassword,
  } = useSelector((state) => state.user.user);
  const [isForm, setIsForm] = useState(false);
  const handleClick = () => {
    setIsForm(!isForm);
  };
  const hiddenForm = !isForm ? 'hidden' : '';
  const hiddenLi = isForm ? 'hidden' : '';
  const dispatch = useDispatch();
  const handleChange = (value, key) => {
    dispatch(changeProfilForm([key, value]));
  };
  return (
    <Page>
      <form>
        <ul className="updateUserAccount">
          <div className="updateUserAccount container">
            <li className={`updateUserAccount list-item ${hiddenLi}`}>{firstname}</li>
            <Field
              className={`updateUserAccount input-item ${hiddenForm}`}
              name="firstname"
              type="text"
              value={firstname}
              onChange={handleChange}
            />
          </div>
          <div className="updateUserAccount container">
            <li className={`updateUserAccount list-item ${hiddenLi}`}>{lastname}</li>
            <Field
              className={`updateUserAccount input-item ${hiddenForm}`}
              name="lastname"
              type="text"
              value={lastname}
              onChange={handleChange}
            />
          </div>
          <div className="updateUserAccount container">
            <li className={`updateUserAccount list-item ${hiddenLi}`}>{phone}</li>
            <Field
              className={`updateUserAccount input-item ${hiddenForm}`}
              name="phone"
              type="text"
              value={phone}
              onChange={handleChange}
            />
          </div>
          <div className="updateUserAccount container">
            <li className={`updateUserAccount list-item ${hiddenLi}`}>{email}</li>
            <Field
              className={`updateUserAccount input-item ${hiddenForm}`}
              name="email"
              type="text"
              value={email}
              onChange={handleChange}
            />
          </div>
          <div className="updateUserAccount container">
            <Field
              className={`updateUserAccount input-item ${hiddenForm}`}
              name="password"
              type="password"
              value={password}
              onChange={handleChange}
            />
          </div>
          <div className="updateUserAccount container">
            <Field
              className={`updateUserAccount input-item ${hiddenForm}`}
              name="sndPassword"
              type="password"
              value={sndPassword}
              onChange={handleChange}
            />
          </div>
        </ul>
        <button
          className="updateUserAccount button"
          type="button"
          onClick={handleClick}
        > {!isForm ? 'Mettre à jour mes informations' : 'valider'}
        </button>
      </form>
    </Page>
  );
}

export default UserContact;
