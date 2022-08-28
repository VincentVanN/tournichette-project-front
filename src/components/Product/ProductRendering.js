import { useSelector } from 'react-redux';
import Page from '../Page/Page';
import Product from './Product';

function ProductRendering() {
  const width = useSelector((state) => state.navigation.width);
  if (width >= 1280) {
    return (
      <Product />
    );
  }
  return (
    <Page>
      <Product />
    </Page>
  );
}

export default ProductRendering;
