import { motion, AnimatePresence } from 'framer-motion';
import PropTypes from 'prop-types';

function Modal({ message, handler }) {
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
      />
    </AnimatePresence>
  );
}
Modal.propTypes = {
  message: PropTypes.string.isRequired,
  handler: PropTypes.func.isRequired,
};
export default Modal;
