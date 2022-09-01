import { useSelector } from 'react-redux';
import { motion } from 'framer-motion';
import './cartWithCount.scss';

function CartWithCount() {
  const firstname = useSelector((state) => state.user.user.firstname);
  const countOfProducts = useSelector((state) => state.shoppingCart.count);
  const width = useSelector((state) => state.navigation.width);
  const color = width > 1024 ? '#f2f5df' : '#356859';
  return (
    <div className="headerCart">
      <div className="login">{`Hello ${firstname}!`}</div>
      {countOfProducts !== 0 && (
      <div className="cart">
        <motion.div
          className="count"
          key={countOfProducts}
          initial={{
            scale: 0,
          }}
          animate={{
            scale: 1,
            transition: {
              duration: 0.1, type: 'spring', damping: 12, stiffness: 500,
            },
          }}
        >
          <p>
            {countOfProducts}
          </p>
        </motion.div>
        <div className="icon">
          <ion-icon name="cart-outline" style={{ fontSize: '45px', color: `${color}` }} />
        </div>
      </div>
      )}
    </div>
  );
}

export default CartWithCount;
