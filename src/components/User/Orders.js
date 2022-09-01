import './user.scss';
import 'src/components/User/orders.scss';
import { useSelector } from 'react-redux';
import OrderHistory from './OrderHistory';

function Orders() {
  const orderHistory = useSelector((state) => state.user.orderHistory);
  if (orderHistory.length === 0) {
    return (
      <div className="no-orderHistory">
        <header className="no-orderHistory-header">
          <h2 className="orderHistory-title">Historique des commandes</h2>
        </header>
        <p>Tu n'as pas encore commandé :D </p>
      </div>
    );
  }
  if (orderHistory.length !== 0) {
    return (
      <div className="orderHistory">
        <header className="orderHistory-header">
          <h2 className="orderHistory-title">Historique des commandes</h2>
        </header>
        {orderHistory.data.map((order) => (
          <OrderHistory
            order={order}
            key={order.id}
          />
        ))}
      </div>
    );
  }
}

export default Orders;
