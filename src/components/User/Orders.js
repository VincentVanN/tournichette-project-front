import { useSelector } from 'react-redux';
import { useState } from 'react';
import './user.scss';

function Orders() {
  const orderHistory = useSelector((state) => state.user.orderHistory);

  const [isActive, setIsActive] = useState(false);
  const hiddenNoDetail = !isActive ? 'hidden' : '';

  if (orderHistory.length === 0) {
    return (
      <div className="no-orderHistory">
        <h2>Historique des commandes</h2>
        <p>Vous n'avez pas encore commandé :D </p>
      </div>
    );
  }
  if (orderHistory.length !== 0) {
    return (
      <div className="orders">
        <h2>Historique des commandes</h2>
        <div className="orderHistory">
          {orderHistory.data.map((order) => (
            <div className="orderHistory-one" key={order.id}>
              <ul>
                <li className="orderHistory-date">Commande du {order.dateOrder}</li>
                <li className="orderHistory-depot">Déposé au {order.depot.address}</li>
                <div className={`orderHistory-detail ${hiddenNoDetail}`}>
                  { order.orderProducts.map((product) => (
                    <li
                      className="orderHistory-product"
                      key={product.product.slug}
                    >
                      {`${(product.product.unity === 'kg' ? parseInt(product.quantity, 10) : product.quantity)}${product.product.unity}`} {product.product.name}(s) : {product.product.price}€ par lot
                    </li>
                  ))}
                  { order.cartOrders.map((cart) => (
                    <li
                      className="orderHistory-product"
                      key={cart.cart.name}
                    >
                      {cart.quantity} {cart.cart.name}(s) : {cart.cart.price}€ par lot
                    </li>
                  ))}
                </div>
                <li className="orderHistory-price">Prix total: {order.price}€</li>
              </ul>
            </div>
          ))}
          <button
            className="orderHistory-button"
            type="button"
            onClick={() => setIsActive(!isActive)}
          > {!isActive ? 'Voir le détail' : 'Masquer le détail'}
          </button>
        </div>
      </div>

    );
  }
}
export default Orders;
