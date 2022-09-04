import { motion, AnimatePresence } from 'framer-motion';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import {
  deleteButtonText,
  deleteNavigationMessage,
  deleteRedirection,
  setShowModal,
} from '../../feature/navigation.slice';
import { deleteServerMessage } from '../../feature/shoppingCart.slice';

function Modal() {
  const showModal = useSelector((state) => state.navigation.showModal);
  const navigationMessage = useSelector((state) => state.navigation.navigationMessage);
  const serverMessage = useSelector((state) => state.shoppingCart.serverMessage);
  const buttonText = useSelector((state) => state.navigation.buttonText);
  const redirection = useSelector((state) => state.navigation.redirection);
  const height = useSelector((state) => state.navigation.height);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const deleteMessage = () => (
    navigationMessage ? dispatch(deleteNavigationMessage()) : dispatch(deleteServerMessage())
  );
  console.log(serverMessage, serverMessage);
  const handleModal = () => {
    navigate(redirection);
    dispatch(deleteButtonText());
    dispatch(deleteRedirection());
    deleteMessage();
    dispatch(setShowModal(false));
  };
  const backdrop = {
    visible: { opacity: 1 },
    hidden: { opacity: 0 },
  };
  const modal = {
    hidden: {
      y: '-100vh',
      opacity: 0,
    },
    visible: {
      y: (height * 0.4),
      opacity: 1,
      transition: { delay: 0.5 },
    },
    exit: {
      y: '100vh',
      opacity: 0,
    },
  };
  return (
    <AnimatePresence mode="wait">
      {showModal && (
        <div className="modal-container">
          <motion.div
            className="backdrop"
            variants={backdrop}
            initial="hidden"
            animate="visible"
            exit="hidden"
          >
            <motion.div
              className="modal"
              variants={modal}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <p>{navigationMessage || serverMessage}</p>
              <button
                type="button"
                onClick={handleModal}
              >
                <p>{buttonText}</p>
                <ion-icon name="arrow-forward-circle-outline" />
              </button>
            </motion.div>
          </motion.div>
        </div>

      )}

    </AnimatePresence>
  );
}

export default Modal;
