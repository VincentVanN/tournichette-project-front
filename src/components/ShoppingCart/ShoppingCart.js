import './shoppingCart.scss';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import Card from '../Card/Card';
import ChoiseDepotPoints from '../ChoiseDepotPoints/ChoiseDepotPoints';
import ShoppingCartEmpty from './ShoppingCartEmpty';

function ShoppingCart() {
  const cartToDisplay = useSelector((state) => state.shoppingCart.shoppingCart);
  //
  const [isAdressMenu, setIsAdressMenu] = useState(false);
  const handleClickAdressMenu = () => setIsAdressMenu(!isAdressMenu);
  //
  //
  // get amount of order
  const cartAmount = useSelector((state) => state.shoppingCart.cartAmount);

  if (cartToDisplay.length === 0) {
    return (
      <ShoppingCartEmpty />
    );
  }
  if (cartToDisplay.length !== 0) {
    return (
      <div className="shoppingCart">
        {!isAdressMenu && (
          <div className="shoppingCart-container">
            <div className="shoppingCart-header">
              <div className="shoppingCart-title">
                <div className="shoppingCart-shoppingCartAmont">
                  <div className="cart-icon">
                    <ion-icon name="cart-outline" style={{ fontSize: '50px', padding: '5px' }} />
                  </div>
                  <div className="cart-amount">
                    <span>Total</span>{` ${cartAmount}€`}
                  </div>
                </div>
              </div>
            </div>
            <ul className="shoppingCart-list">
              {cartToDisplay.map((product) => (
                <Card
                  related="shoppingCart"
                  key={product.name}
                  name={product.name}
                  image={product.image}
                  price={product.price}
                  unity={product.unity}
                  quantity={product.quantity}
                  slug={product.slug}
                  product={product}
                  id={product.id}
                />
              ))}
            </ul>
            <div
              className="choiseDepotButton"
              onClick={handleClickAdressMenu}
            >
              <p>Valider</p>
              <ion-icon name="arrow-forward-circle-outline" />
            </div>
          </div>
        )}
        {isAdressMenu && (<ChoiseDepotPoints />)}
      </div>
    );
  }
}

export default ShoppingCart;
