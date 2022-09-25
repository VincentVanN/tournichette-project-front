import { useLocation, useNavigate } from 'react-router';
import { motion } from 'framer-motion';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getOrderHistory } from '../../AsyncChunk/AsyncChunkUser';

function ShoppingCartPaymentSuccess() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleClickHome = () => navigate('/');
  const handleClickProfil = () => navigate('/profil');
  const { state } = useLocation();
  useEffect(() => {
    dispatch(getOrderHistory());
  }, []);
  return (
    <div className="shoppingCart">
      <motion.div
        className="shoppingCart-empty"
        initial={{ x: '-100vw' }}
        animate={{ x: 0 }}
      >
        <div
          className="shoppingCart-empty-title"
        >
          {!state || state.origin === 'creditCard' ? 'Paiement effectué! Merci pour tes achats' : 'Commande enregistrée! Merci pour ta fidélité'}
        </div>
        <div
          className="shoppingCart-empty-content"
          onClick={handleClickHome}
        >
          Retour à l'accueil
        </div>
        <ion-icon name="arrow-forward-circle-outline" size="large" />
        <div
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
        </div>
      </motion.div>
    </div>
  );
}

export default ShoppingCartPaymentSuccess;
