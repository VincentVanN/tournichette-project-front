import { useSelector } from 'react-redux';
import Page from '../Page/Page';
import ShoppingCart from './ShoppingCart';

function ShoppingCartRendering() {
  const width = useSelector((state) => state.navigation.width);
  if (width >= 1024) {
    return (
      <ShoppingCart />
    );
  }
  return (
    <Page>
      <ShoppingCart />
    </Page>
  );
}

export default ShoppingCartRendering;
