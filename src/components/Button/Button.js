import { useState } from 'react';
import PropTypes from 'prop-types';
import './button.scss';
import { motion } from 'framer-motion';

function Button({ text, icon }) {
  const [isHover, setIsHover] = useState(false);
  const windowVariants = {
    open: {
      width: '180px',
      height: '50px',
      zIndex: 5,
      y: '-70px',
      transition: {
        duration: 0.5,
        width: { delay: 0.5 },
        height: { delay: 0.5 },
        zIndex: { delay: 0.2 },
      },
    },
    closed: {
      width: '30px',
      height: '30px',
      y: 0,
      zIndex: -5,
      transition: {
        duration: 0.4,
        width: { duration: 0.1 },
        height: { duration: 0.1 },
        zIndex: { delay: 0.4 },
        y: { delay: 0.3 },
      },
    },
  };
  return (
    <div
      className="iconButton_container"
      onMouseOver={() => setIsHover(true)}
      onMouseOut={() => setIsHover(false)}
    >

      <motion.div
        className={isHover ? 'buttonToggle active' : 'buttonToggle'}
        whileHover={{ scale: 1.1 }}
        animate={{
          rotate: isHover ? 360 : 0,
          transition: {
            duration: 0.7,
          },
        }}
      >
        <ion-icon
          name={icon}
          style={{ fontSize: '3.5em', color: isHover ? '#fd7c55' : '#356859' }}
        />

      </motion.div>

      <motion.div
        className="window"
        initial="closed"
        animate={isHover ? 'open' : 'closed'}
        variants={windowVariants}
      >
        <div className="text">
          {text}
        </div>
      </motion.div>
    </div>

  );
}
Button.propTypes = {
  text: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
};
export default Button;
