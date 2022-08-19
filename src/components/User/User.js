/* eslint-disable react/button-has-type */
import { useNavigate } from 'react-router';
import Page from '../Page/Page';
import './user.scss';

// == Composant
function User() {
  const navigate = useNavigate();
  const handleClickOrders = () => navigate('/profil/historique');
  const handleClickContact = () => navigate('/profil/coordonnees');
  return (
    <Page>
      <div className="user">
        <button
          className="user-orders"
          onClick={handleClickOrders}
        >
          Mes commandes
        </button>
        <button
          className="user-orders"
          onClick={handleClickContact}
        >
          Mes coordonnées
        </button>
      </div>
    </Page>

  );
}

// == Export
export default User;
