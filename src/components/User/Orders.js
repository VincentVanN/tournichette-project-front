import './user.scss';
import 'src/components/User/orders.scss';
import { useSelector } from 'react-redux';
import OrderHistory from './OrderHistory';

function Orders() {
  const orderHistory = useSelector((state) => state.user.orderHistory);
  return (
    <div className="orderHistory-container">
      <div className="orderHistory-title">Historique des commandes</div>
      <div className="orderHistory">
        {orderHistory.length === 0 && (
          <p>Tu n'as pas encore commandé !</p>
        )}
        {orderHistory.length !== 0 && (
          orderHistory.data.map((order) => (
            <OrderHistory
              order={order}
              key={order.id}
            />
          )))}
      </div>
    </div>
  );
}

export default Orders;
