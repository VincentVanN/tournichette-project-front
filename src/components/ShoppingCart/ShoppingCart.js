import { useSelector } from 'react-redux';
import './shoppingCart.scss';

function ShoppingCart() {
  const shoppingCart = useSelector((state) => state.shoppingCart.shoppingCart);
  console.log(shoppingCart);
  return (
    <div className="shoppingCart">
      {(!shoppingCart) && <div className="shoppingCart-empty"> Votre panier est vide </div>}
    </div>

  );
}

export default ShoppingCart;
