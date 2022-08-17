import { useSelector } from 'react-redux';
import './user.scss';
import { useState } from 'react';
import Page from '../Page/Page';

function UserContact() {
  const {
    firstname, lastname, phone, email,
  } = useSelector((state) => state.user.user);
  const [isForm, setIsForm] = useState(false);
  const handleClick = () => {
    setIsForm(!isForm);
  };
  const hiddenForm = !isForm ? 'hidden' : '';
  const hiddenLi = isForm ? 'hidden' : '';
  return (
    <Page>
      <form>
        <ul className="updateUserAccount">
          <div className="updateUserAccount container">
            <li className={`updateUserAccount list-item ${hiddenLi}`}>{firstname}</li>
            <input
              className={`updateUserAccount input-item ${hiddenForm}`}
            />
          </div>
          <div className="updateUserAccount container">
            <li className={`updateUserAccount list-item ${hiddenLi}`}>{lastname}</li>
            <input
              className={`updateUserAccount input-item ${hiddenForm}`}
            />
          </div>
          <div className="updateUserAccount container">
            <li className={`updateUserAccount list-item ${hiddenLi}`}>{phone}</li>
            <input
              className={`updateUserAccount input-item ${hiddenForm}`}
            />
          </div>
          <div className="updateUserAccount container">
            <li className={`updateUserAccount list-item ${hiddenLi}`}>{email}</li>
            <input
              className={`updateUserAccount input-item ${hiddenForm}`}
            />
          </div>
        </ul>
        <button
          className="updateUserAccount button"
          type="button"
          onClick={handleClick}
        > Mettre à jour mes informations
        </button>
      </form>
    </Page>
  );
}

export default UserContact;
