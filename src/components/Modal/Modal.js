import { motion, AnimatePresence } from 'framer-motion';
import { useSelector } from 'react-redux';

function Modal() {
  const serverMessage = useSelector((state) => state.navigation.serverMessage);
  const backdrop = {
    visible: { opacity: 1 },
    hidden: { opacity: 0 },
  };
  return (
    <AnimatePresence mode="wait">
      {serverMessage && (
      <motion.div
        className="backdrop"
        variants={backdrop}
        initial="hidden"
        animate="visible"
      />
      )}
    </AnimatePresence>
  );
}

export default Modal;
