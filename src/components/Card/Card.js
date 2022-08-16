import PropTypes from 'prop-types';
import 'src/components/Card/card.scss';
import { useDispatch, useSelector } from 'react-redux';
import { pushInCart, setCount } from '../../feature/shoppingCart.slice';

function Card({
  name, price, unity, stock, onClick, slug, product,
}) {
  const handleClick = () => onClick(slug);
  const dispatch = useDispatch();

  const products = useSelector((state) => state.shoppingCart.shoppingCart);
  // eslint-disable-next-line no-trailing-spaces

  const incrementProduct = () => {
    const productsCopy = [...products];
    if (productsCopy.some((element) => element.id === product.id)) {
      const [item] = productsCopy.filter((element) => element.id === product.id);
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
    dispatch(pushInCart(incrementProduct()));
    dispatch(setCount());
  };
  return (
    <div className="card">
      <article
        className="card_article"
        onClick={handleClick}
      >
        <h2 className="card-title">{name}</h2>
        <ul className="card-infos">
          <li>{price}</li>
          <li>{unity}</li>
          <li>{stock}</li>
        </ul>

      </article>
      <button
        type="button"
        onClick={handleClickCart}
        className="card_button"
      >
        Mettre dans mon panier
      </button>
    </div>
  );
}

Card.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  unity: PropTypes.string.isRequired,
  stock: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired,
  slug: PropTypes.string.isRequired,
  product: PropTypes.object.isRequired,
};

export default Card;
