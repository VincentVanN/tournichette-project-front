/* eslint-disable react/button-has-type */
import { useNavigate } from 'react-router';
import logo from 'src/assets/logo.svg';
import Page from '../Page/Page';
import './user.scss';

// == Composant
function User() {
  const navigate = useNavigate();
  const handleClickOrders = () => navigate('/profil/historique');
  const handleClickContact = () => navigate('/profil/coordonnees');
  return (
    <Page>
      <div className="user-container">
        <div className="image-container">
          <img className="form-logo" src={logo} alt="logo Tournichette" />
        </div>
        <div className="user-button-group">
          <div
            className="user-button-container"
            onClick={handleClickOrders}
          >
            <h2 className="user-button-title"> Mes commandes</h2>
            <button
              className="user-button"
              type="button"
              onClick={handleClickOrders}
            >
              <ion-icon name="arrow-forward-circle-outline" style={{ color: '#f88e6d', fontSize: '50px' }} />
            </button>
          </div>
          <div
            className="user-button-container"
            onClick={handleClickContact}
          >
            <h2 className="user-button-title">Mon profil</h2>
            <button
              className="user-button"
              type="button"
              onClick={handleClickContact}
            >
              <ion-icon name="arrow-forward-circle-outline" style={{ color: '#f88e6d', fontSize: '50px' }} />
            </button>
          </div>
        </div>
      </div>
    </Page>

  );
}

// == Export
export default User;
