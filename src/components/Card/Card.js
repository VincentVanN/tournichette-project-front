import PropTypes from 'prop-types';

function Card({
  name,
  stock,
  unity,
  image,
  price,
}) {
  return (
    <article className="card">
      <h2 className="card-title">{name}</h2>
      <img className="card-img" src={image} alt={name} />
      <ul className="card-infos">
        <li>{price}</li>
        <li>{unity}</li>
        <li>{stock}</li>
      </ul>
      <button type="button">Mettre dans mon panier</button>
    </article>

  );
}

Card.propTypes = {
  name: PropTypes.string.isRequired,
  stock: PropTypes.number.isRequired,
  unity: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};

export default Card;
