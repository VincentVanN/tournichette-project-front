import { useSelector } from 'react-redux';
import './user.scss';

function Orders() {
  const orderHistory = useSelector((state) => state.user.orderHistory);
  console.log(orderHistory);
  return (
    <div className="orders">
      <h2>historique des commandes</h2>
      <div className="orderHistory">
        {orderHistory.data.map((order) => (
          <>
            <div
              className="date"
              key={order.id}
            >{order.dateOrder}
            </div>
            {/* <div className="cartOrders">{order.cartOrders.cart.name}</div> */}
            <div
              className="price"

            >
              {order.price}€
            </div>
            {/* <div className="depot">{order.depot.adress}</div> */}
          </>
        ))}
      </div>
    </div>

  );
}

export default Orders;
