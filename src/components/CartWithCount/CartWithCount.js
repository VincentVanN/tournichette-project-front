import { useSelector } from 'react-redux';
import './cartWithCount.scss';

function CartWithCount() {
  const firstname = useSelector((state) => state.user.user.firstname);
  const countOfProducts = useSelector((state) => state.shoppingCart.count);
  return (
    <div className="headerCart">
      <div className="login">{`hello ${firstname}!`}</div>
      {countOfProducts !== 0 && (
      <div className="cart">
        <div className="count">
          <p>
            {countOfProducts}
          </p>
        </div>
        <div className="icon">
          <ion-icon name="cart-outline" style={{ fontSize: '45px' }} />
        </div>
      </div>
      )}
    </div>
  );
}

export default CartWithCount;
