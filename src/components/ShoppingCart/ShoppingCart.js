import './shoppingCart.scss';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import Page from '../Page/Page';

function ShoppingCart() {
  const cartToDisplay = useSelector((state) => state.shoppingCart.shoppingCart);
  const navigate = useNavigate();
  const handleClick = () => navigate('/');
  return (
    <Page>
      {!cartToDisplay
      && (
      <div className="shoppingCart">
        <div>Votre panier est vide!</div>
        <div
          onClick={handleClick}
        >
          Par ici pour faire vos courses!
        </div>
      </div>
      )}
    </Page>

  );
}

export default ShoppingCart;
