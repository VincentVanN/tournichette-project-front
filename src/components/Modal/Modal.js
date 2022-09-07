import { motion, AnimatePresence } from 'framer-motion';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import {
  deleteButtonText,
  deleteNavigationMessage,
  deleteRedirection,
  setShowModal,
} from '../../feature/navigation.slice';
import { deleteMessageProductsServer } from '../../feature/products.slice';
import { deleteServerMessage } from '../../feature/shoppingCart.slice';
import { deleteErrorMessage, deleteServerMessageUser, setIsSubscribe } from '../../feature/user.slice';

function Modal() {
  const showModal = useSelector((state) => state.navigation.showModal);
  const navigationMessage = useSelector((state) => state.navigation.navigationMessage);
  const serverMessageShoppingCart = useSelector((state) => state.shoppingCart.serverMessage);
  const serverMessageUser = useSelector((state) => state.user.serverMessageUser);
  const errorUserMessage = useSelector((state) => state.user.errorMessage);
  const isSubscribe = useSelector((state) => state.user.isSubscribe);
  const messageProductsServer = useSelector((state) => state.products.messageProductsServer);

  const buttonText = useSelector((state) => state.navigation.buttonText);
  const redirection = useSelector((state) => state.navigation.redirection);
  const height = useSelector((state) => state.navigation.height);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const deleteMessage = () => {
    if (messageProductsServer) {
      dispatch(deleteMessageProductsServer());
    }
    if (navigationMessage) {
      dispatch(deleteNavigationMessage());
    }
    if (serverMessageShoppingCart) {
      dispatch(deleteServerMessage());
    }
    if (serverMessageUser) {
      dispatch(deleteServerMessageUser());
    }
    if (errorUserMessage.length !== 0) {
      dispatch(deleteErrorMessage([]));
    }
  };
  const handleModal = () => {
    if (redirection) {
      navigate(redirection);
    }
    if (isSubscribe && errorUserMessage.length === 0) {
      dispatch(setIsSubscribe(false));
    }
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
              {(navigationMessage || serverMessageShoppingCart || serverMessageUser) && (
                <p>{navigationMessage || serverMessageShoppingCart || serverMessageUser}</p>
              )}
              {(errorUserMessage.length !== 0) && (
                <ul className="error-message-container">
                  {errorUserMessage.map((error) => <li>{error}</li>)}
                </ul>
              )}
              <button
                type="button"
                onClick={handleModal}
              >
                <p>{buttonText}</p>
                <ion-icon name="arrow-forward-circle-outline" style={{ color: '#fd7c55', fontSize: '2em' }} />
              </button>
            </motion.div>
          </motion.div>
        </div>

      )}

    </AnimatePresence>
  );
}

export default Modal;
