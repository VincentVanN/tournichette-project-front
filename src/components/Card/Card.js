import PropTypes from 'prop-types';
import 'src/components/Card/card.scss';
import { useNavigate } from 'react-router';

function Card({
  name, image, price, unity, stock, onClick, slug,
}) {
  const handleClick = () => onClick(slug);

  const navigate = useNavigate();
  const handleClickCart = () => navigate('/panier');
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
};

export default Card;
