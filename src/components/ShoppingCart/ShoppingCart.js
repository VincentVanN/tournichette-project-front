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
          <div className="productLine">
            <p>{item.name}</p>
            <p>{item.quantity}</p>
            <p>x</p>
            <p>{item.parcel}</p>
            <p>{item.unity}</p>
            <p>{`${item.quantity * item.price}€`}</p>
          </div>
        ))}
      </div>
      )}
    </Page>

  );
}

export default ShoppingCart;
