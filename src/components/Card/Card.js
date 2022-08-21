import PropTypes from 'prop-types';
import 'src/components/Card/card.scss';
import { useDispatch, useSelector } from 'react-redux';
import { pushInCart, setCount } from '../../feature/shoppingCart.slice';

function Card({
  name, price, unity, quantity, onClick, slug, product,
}) {
  const handleClick = () => onClick(slug);
  const dispatch = useDispatch();

  const products = useSelector((state) => state.shoppingCart.shoppingCart);
  // eslint-disable-next-line no-trailing-spaces

  const incrementProduct = () => {
    const productsCopy = [...products];
    if (productsCopy.some((element) => element.id === product.id)) {
      const item = productsCopy.find((element) => element.id === product.id);
      const newItem = { ...item };
      newItem.quantity += 1;
      const newArrayForState = productsCopy.filter((element) => element.id !== product.id);
      newArrayForState.push(newItem);
      return newArrayForState;
    }
    productsCopy.push(product);
    return productsCopy;
  };

  const handleClickCart = () => {
    dispatch(setCount(1));
    dispatch(pushInCart(incrementProduct()));
  };
  return (
    <div className="card">
      <article
        className="card_article"
        onClick={handleClick}
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
        <button
          type="button"
          onClick={handleClickCart}
          className="card-leftSide card_button"
        >
          <ion-icon name="add-circle-outline" size="medium" />
        </button>
      </article>
    </div>
  );
}

Card.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  unity: PropTypes.string.isRequired,
  quantity: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  slug: PropTypes.string.isRequired,
  product: PropTypes.object.isRequired,
};

export default Card;
