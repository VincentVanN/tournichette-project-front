/* eslint-disable consistent-return */
import PropTypes from 'prop-types';
import './staticProductsDisplay.scss';
import panier from './Brouette.jpg';
import epicerie from './produitsVerres.jpg';
import legumes from './HaricotsVert.jpg';
import detail from './detail.jpg';
import fruits from './fraises.jpg';

function StaticProductsDisplay({ related }) {
  const image = () => {
    if (related === 'panier') {
      return panier;
    }
    if (related === 'epicerie') {
      return epicerie;
    }
    if (related === 'legumes') {
      return legumes;
    }
    if (related === 'detail') {
      return detail;
    }
    if (related === 'fruits') {
      return fruits;
    }
  };
  return (
    <div className="static-container">
      <div className="static-title-container">
        <div className="static-title">{related.toUpperCase()}</div>
      </div>
      <img src={image()} alt={related} className="static-image" />
      <div className="static-subtitle-container">
        <div className="static-subtitle">
          Fais ton choix!
        </div>
      </div>
    </div>
  );
}
StaticProductsDisplay.propTypes = {
  related: PropTypes.string.isRequired,
};
export default StaticProductsDisplay;
