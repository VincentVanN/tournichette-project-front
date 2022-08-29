import { useSelector } from 'react-redux';
import './user.scss';

function Orders() {
  const orderHistory = useSelector((state) => state.user.orderHistory);
  console.log(orderHistory);

  // orderHistory.forEach((element) => newArray.push(element.cartOrders));
  // console.log(newArray);
  // const newArray = orderHistory.orderProducts;

  if (orderHistory.length === 0) {
    return (
      <>
        <h2>historique des commandes</h2>
        <p>Vous n'avez pas encore commandé :D </p>
      </>
    );
  }
  if (orderHistory.length !== 0) {
    return (
      <div className="orders">
        <h2>historique des commandes</h2>
        <div className="orderHistory">
          {orderHistory.data.map((order) => (
            <div className="orderHistory-one" key={order.id}>
              <ul>
                <li className="orderHistory-date">Commande du {order.dateOrder}</li>
                <li className="orderHistory-depot">Déposé au {order.depot.address}</li>
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
                <li className="orderHistory-price">Prix total: {order.price}€</li>
              </ul>
            </div>
          ))}
        </div>
      </div>

    );
  }
}
export default Orders;
