import './shoppingCart.scss';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import Page from '../Page/Page';

function ShoppingCart() {
  const cartToDisplay = useSelector((state) => state.shoppingCart.shoppingCart);
  const navigate = useNavigate();
  const handleClick = () => navigate('/');
  console.log(cartToDisplay);
  return (
    <Page>
      {cartToDisplay.length === 0
      && (
      <div className="shoppingCart">
        <div>Votre panier est vide</div>
        <div
          onClick={handleClick}
        >
          pour vos courses c'est par ici!
        </div>
      </div>
      )}
      {cartToDisplay
      && (
      <div className="shoppingCart">
        {cartToDisplay.map((item) => (
          <div className="product">
            <p>{item.name}</p>
          </div>
        ))}
      </div>
      )}
    </Page>

  );
}

export default ShoppingCart;
