import { useSelector } from 'react-redux';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router';

function CartWithCount() {
  const countOfProducts = useSelector((state) => state.shoppingCart.count);
  const width = useSelector((state) => state.navigation.width);
  const color = width > 1024 ? '#f2f5df' : '#356859';
  const size = width >= 1024 ? '55px' : '45px';
  const navigate = useNavigate();
  const handleClick = () => navigate('/MesAchats');
  return (
    <div className="countCart-container">
      <motion.div
        className="headerCart"
        onClick={handleClick}
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
          >
            <p>
              {countOfProducts}
            </p>
          </motion.div>
          <div className="icon">
            <ion-icon name="cart-outline" style={{ fontSize: `${size}`, color: `${color}` }} />
          </div>
        </div>
        )}
      </motion.div>

    </div>

  );
}

export default CartWithCount;
