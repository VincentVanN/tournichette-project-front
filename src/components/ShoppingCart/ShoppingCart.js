import './shoppingCart.scss';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import { useState } from 'react';
import Card from '../Card/Card';
import ChoiseDepotPoints from '../ChoiseDepotPoints/ChoiseDepotPoints';

function ShoppingCart() {
  const cartToDisplay = useSelector((state) => state.shoppingCart.shoppingCart);
  //
  const [isAdressMenu, setIsAdressMenu] = useState(false);
  const handleClickAdressMenu = () => setIsAdressMenu(!isAdressMenu);
  //
  // return on products list when cart's empty
  const navigate = useNavigate();
  const handleClick = () => navigate('/liste');
  //
  // get amount of order
  const cartAmount = useSelector((state) => state.shoppingCart.cartAmount);

  if (cartToDisplay.length === 0) {
    return (
      <div className="shoppingCart">
        <div
          className="shoppingCart-empty"
          onClick={handleClick}
        >
          <div
            className="shoppingCart-empty-title"
          >Ton panier est vide
          </div>
          <div
            className="shoppingCart-empty-content"
          >
            pour tes courses c'est par ici!
          </div>
          <ion-icon name="arrow-forward-circle-outline" size="large" />
        </div>
      </div>
    );
  }
  if (cartToDisplay.length !== 0) {
    return (
      <div className="shoppingCart">
        {!isAdressMenu && (
          <>
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

            <ul className="shoppingCart-products">
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
          </>

        )}
        {isAdressMenu && (<ChoiseDepotPoints />)}
      </div>
    );
  }
}

export default ShoppingCart;
