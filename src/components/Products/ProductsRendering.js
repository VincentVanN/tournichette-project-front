import { useSelector } from 'react-redux';
import Page from '../Page/Page';
import Products from './Products';

function ProductsRendering() {
  const width = useSelector((state) => state.navigation.width);
  if (width >= 1024) {
    return (
      <Products />
    );
  }
  return (
    <Page>
      <div className="component">
        <Products />
      </div>
    </Page>
  );
}

export default ProductsRendering;
