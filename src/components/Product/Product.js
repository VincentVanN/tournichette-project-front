import './product.scss';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import Card from '../Card/Card';

function Product() {
  const products = useSelector((state) => state.products.products);
  return (
    <div className="product">
      <div className="product-item">
        {products.map((product) => (
          <Card key={product.code_product} {...product} />
        ))}
      </div>
    </div>
  );
}

Product.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      code_product: PropTypes.number.isRequired,
    }),
  ),
};
Product.defaultProps = {
  products: null,
};

export default Product;
