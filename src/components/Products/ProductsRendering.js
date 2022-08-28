import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import Page from '../Page/Page';
import Products from './Products';

function ProductsRendering({ related }) {
  const width = useSelector((state) => state.navigation.width);
  if (width >= 1024) {
    return (
      <Products related={related} />
    );
  }
  return (
    <Page>
      <Products related={related} />
    </Page>
  );
}
ProductsRendering.propTypes = {
  related: PropTypes.string.isRequired,
};

export default ProductsRendering;
