import { useSelector } from 'react-redux';
import './user.scss';
import Page from '../Page/Page';

function UserContact() {
  const user = useSelector((state) => state.user.user);
  return (
    <Page>
      <form>
        <ul className="updateUserAccount">
          <div className="updateUserAccount container">
            <li className="updateUserAccount list-item">{user.firstname}</li>
            <input />
          </div>
          <div className="updateUserAccount container">
            <li className="updateUserAccount list-item">{user.lastname}</li>
            <input />
          </div>
          <div className="updateUserAccount container">
            <li className="updateUserAccount list-item">{user.phone}</li>
            <input />
          </div>
          <div className="updateUserAccount container">
            <li className=" list-item">{user.email}</li>
            <input />
          </div>
        </ul>
        <button
          className="updateUserAccount button"
          type="button"
        > Mettre à jour mes informations
        </button>
      </form>
    </Page>
  );
}

export default UserContact;
