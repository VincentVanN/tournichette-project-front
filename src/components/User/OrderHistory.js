/* eslint-disable react/prop-types */
import { useState } from 'react';
import './user.scss';
import 'src/components/User/orders.scss';

function OrderHistory({ order }) {
  // const orderHistory = useSelector((state) => state.user.orderHistory);

  const [isActive, setIsActive] = useState(false);
  const hiddenNoDetail = !isActive ? 'hidden' : '';

  return (
    <div className="orderHistory-one">
      <ul>
        <li className="orderHistory-date">Commande du {order.dateOrder}</li>
        <li className="orderHistory-depot">Déposé au {order.depot.address}</li>
        <div className={`orderHistory-detail ${hiddenNoDetail}`}>
          { order.orderProducts.map((product) => (
            <li
              className="orderHistory-product"
              key={product.product.slug}
            >
              {`${(product.product.unity === 'kg' ? parseInt(product.quantity, 10) : product.quantity)}${product.product.unity}`} {product.product.name} / {product.product.price}€
            </li>
          ))}
          { order.cartOrders.map((cart) => (
            <li
              className="orderHistory-product"
              key={cart.cart.name}
            >
              {cart.quantity} {cart.cart.name} /{cart.cart.price}€
            </li>
          ))}
        </div>
        <li className="orderHistory-price">Prix total: {order.price}€</li>
      </ul>
      <button
        className="orderHistory-button"
        type="button"
        onClick={() => setIsActive(!isActive)}
      >
        {!isActive ? 'Voir le détail' : 'Masquer le détail'}
      </button>

    </div>
  );
}

export default OrderHistory;
