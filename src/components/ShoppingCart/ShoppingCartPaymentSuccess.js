import { useLocation, useNavigate } from 'react-router';
import { motion } from 'framer-motion';
import './shoppingCart.scss';

function ShoppingCartPaymentSuccess() {
  const navigate = useNavigate();
  const handleClickHome = () => navigate('/');
  const handleClickProfil = () => navigate('/profil');
  const { state } = useLocation();
  return (
    <div className="shoppingCart">
      <div
        className="shoppingCart-empty-title"
      >
        {!state || state.origin === 'creditCard' ? 'Paiement effectué! Merci pour tes achats' : 'Commande enregistrée! Merci pour ta fidélité'}
      </div>
      <motion.div
        className="shoppingCart-empty"
        onClick={handleClickHome}
        initial={{ x: '-100vw' }}
        animate={{ x: 0 }}
      >
        <div
          className="shoppingCart-empty-content"
        >
          Retour à l'accueil
        </div>
        <ion-icon name="arrow-forward-circle-outline" size="large" />
      </motion.div>
      <motion.div
        className="shoppingCart-empty"
        onClick={handleClickProfil}
        initial={{ x: '100vw' }}
        animate={{ x: 0 }}
      >
        <div
          className="shoppingCart-empty-content"
        >
          Détail des commandes
        </div>
        <ion-icon name="arrow-forward-circle-outline" size="large" />
      </motion.div>
    </div>
  );
}

export default ShoppingCartPaymentSuccess;
