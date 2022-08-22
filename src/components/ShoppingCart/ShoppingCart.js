import './shoppingCart.scss';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import Page from '../Page/Page';
import Card from '../Card/Card';

function ShoppingCart() {
  const cartToDisplay = useSelector((state) => state.shoppingCart.shoppingCart);
  const navigate = useNavigate();
  const handleClick = () => navigate('/produits');
  const arrayToReduce = [];
  cartToDisplay.forEach((element) => {
    arrayToReduce.push(element.quantity * parseFloat(element.price));
  });
  const resultToDisplay = arrayToReduce.reduce((x, y) => x + y, 0);
  return (
    <Page>
      <div className="container">
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
        <div className="products">
          <ul className="products-items">
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
          <p>{`total ${resultToDisplay}€`}</p>
        </div>
      )}
      </div>
    </Page>

  );
}

export default ShoppingCart;
