/* eslint-disable react/button-has-type */
import { useNavigate, useParams } from 'react-router';
import Page from '../Page/Page';
import './user.scss';

// == Composant
function User() {
  const navigate = useNavigate();
  const { slug } = useParams();
  const handleClickOrders = () => navigate(`/profil/${slug}/commandes`);
  const handleClickContact = () => navigate(`/profil/${slug}/contact`);
  return (
    <Page>
      <div className="user">
        <button
          className="user-orders"
          onClick={handleClickOrders}
        >
          vos commandes
        </button>
        <button
          className="user-orders"
          onClick={handleClickContact}
        >
          vos coordonnées
        </button>
      </div>
    </Page>

  );
}

// == Export
export default User;
