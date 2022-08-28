import { useSelector } from 'react-redux';
import Page from '../Page/Page';
import Orders from './Orders';

function OrdersRendering() {
  const width = useSelector((state) => state.navigation.width);
  if (width >= 1280) {
    return (
      <Orders />
    );
  }
  return (
    <Page>
      <Orders />
    </Page>
  );
}

export default OrdersRendering;
