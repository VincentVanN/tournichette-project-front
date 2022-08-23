import './shoppingCart.scss';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import Page from '../Page/Page';
import Card from '../Card/Card';

function ShoppingCart() {
  const cartToDisplay = useSelector((state) => state.shoppingCart.shoppingCart);
  const navigate = useNavigate();
  const handleClick = () => navigate('/produits');
  const cartAmount = useSelector((state) => state.shoppingCart.cartAmount);
  if (cartToDisplay.length === 0) {
    return (
      <Page>
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
      </Page>
    );
  }
  if (cartToDisplay.length !== 0) {
    return (
      <Page>
        <div className="shoppingCart">
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
          <div className="shoppingCart-list">
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
          </div>
        </div>
      </Page>

    );
  }
}

export default ShoppingCart;
