import { motion, AnimatePresence } from 'framer-motion';
import PropTypes from 'prop-types';

function Modal({
  message,
  handler,
  textButton,
  icon,
}) {
  const backdrop = {
    visible: { opacity: 1 },
    hidden: { opacity: 0 },
  };
  return (
    <AnimatePresence mode="wait">
      <motion.div
        className="backdrop"
        variants={backdrop}
        initial="hidden"
        animate="visible"
      >
        <motion.div className="modal">
          <p>{message}</p>
          <button
            type="button"
            onClick={handler}
          >
            <p>{textButton}</p>
            <ion-icon name={icon} />
          </button>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
Modal.propTypes = {
  message: PropTypes.string.isRequired,
  textButton: PropTypes.string.isRequired,
  handler: PropTypes.func.isRequired,
  icon: PropTypes.string.isRequired,
};
export default Modal;
