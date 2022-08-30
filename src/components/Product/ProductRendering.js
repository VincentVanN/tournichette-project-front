import { useSelector } from 'react-redux';
import Page from '../Page/Page';
import Product from './Product';

function ProductRendering() {
  const width = useSelector((state) => state.navigation.width);
  if (width >= 1024) {
    return (
      <Product />
    );
  }
  return (
    <Page>
      <div className="component">
        <Product />
      </div>

    </Page>
  );
}

export default ProductRendering;
