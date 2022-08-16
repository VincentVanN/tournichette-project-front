import PropTypes from 'prop-types';
import 'src/components/Card/card.scss';
import { useDispatch } from 'react-redux';
import { pushInCart, setCount } from '../../feature/shoppingCart.slice';

function Card({
  name, image, price, unity, stock, onClick, slug, product,
}) {
  const handleClick = () => onClick(slug);
  const dispatch = useDispatch();
  const handleClickCart = () => {
    dispatch(pushInCart(product));
    dispatch(setCount(1));
  };
  return (
    <div className="card">
      <article
        className="card_article"
        onClick={handleClick}
      >
        <h2 className="card-title">{name}</h2>
        <img className="card-img" src={image} alt={name} />
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
  image: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  unity: PropTypes.string.isRequired,
  stock: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired,
  slug: PropTypes.string.isRequired,
  product: PropTypes.object.isRequired,
};

export default Card;
