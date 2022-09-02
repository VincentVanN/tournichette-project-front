import { useSelector } from 'react-redux';
import { motion } from 'framer-motion';
import './cartWithCount.scss';
import { useNavigate } from 'react-router';

function CartWithCount() {
  const countOfProducts = useSelector((state) => state.shoppingCart.count);
  const width = useSelector((state) => state.navigation.width);
  const color = width > 1024 ? '#f2f5df' : '#356859';
  const navigate = useNavigate();
  const handleClick = () => navigate('/MesAchats');
  return (
    <motion.div
      className="headerCart"
      onClick={handleClick}
      key="headerCart"
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
            exit={{ scale: 0 }}
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
    </motion.div>

  );
}

export default CartWithCount;
