import PropTypes from 'prop-types';
import 'src/components/Card/card.scss';
import { useDispatch, useSelector } from 'react-redux';
import { pushInCart, setCount } from '../../feature/shoppingCart.slice';
import { changeQuantityProduct } from '../../utils/cartUtils';

function Card({
  name, price, unity, quantity, onClick, slug, product,
}) {
  const handleClick = () => onClick(slug);
  const dispatch = useDispatch();
  const products = useSelector((state) => state.shoppingCart.shoppingCart);
  const handleClickCart = () => {
    dispatch(pushInCart(changeQuantityProduct(products, product, 1)));
    dispatch(setCount(1));
  };
  return (
    <div className="card">
      <div className="card-container">
        <article
          className="card_article"
        >
          <div className="card-leftSide">
            <h2 className="card-leftSide card-title">{name}</h2>
          </div>
          <div className="doted" />
          <ul className="card_infos">
            <li className="card-unity">{quantity}</li>
            <li className="card-unity">{unity === 'bouteille(s)' ? 'btl' : unity}</li>
            <li className="card-unity">/</li>
            <li className="card-price">{`${price}€`}</li>
          </ul>
        </article>
        <div className="button-group">
          <button
            type="button"
            onClick={handleClickCart}
            className="card-button"
          >
            <ion-icon name="cart-outline" size="medium" />
          </button>
          <button
            type="button"
            onClick={handleClick}
            className="card-button"
          >
            <ion-icon name="reader-outline" size="medium" />
          </button>
        </div>

      </div>

    </div>
  );
}

Card.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  unity: PropTypes.string.isRequired,
  quantity: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired,
  slug: PropTypes.string.isRequired,
  product: PropTypes.object.isRequired,
};

export default Card;
