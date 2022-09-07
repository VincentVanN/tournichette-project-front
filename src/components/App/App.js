// == Import
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import './app.scss';
import { AnimatePresence } from 'framer-motion';
import { setUser, getOrderHistory } from '../../AsyncChunk/AsyncChunkUser';
import Loading from '../Loading/Loading';
import LoginForm from '../LoginForm/LoginForm';
import { getCarts, getCategories, getProducts } from '../../AsyncChunk/AsyncChunkPoducts';
import { setToken } from '../../feature/user.slice';
import { pushInCart, setCartAmount, setCount } from '../../feature/shoppingCart.slice';
import { getDepotsList } from '../../AsyncChunk/AsyncChunkShoppingCart';
import { setHeight, setShowModal, setWidth } from '../../feature/navigation.slice';
import AnimatedRoutesSmallScreen from '../AnimationComponents/AnimatedRoutesSmallScreen';
import AnimatedRoutesLargeScreen from '../AnimationComponents/AnimatedRoutesLargeScreen';
import Modal from '../Modal/Modal';
import { setLocalStorageCount, setLocalStorageShoppingCart } from '../../utils/localStorage';

function App() {
  const loadingProducts = useSelector((state) => state.products.loadingProducts);
  const loadingCategories = useSelector((state) => state.products.loadingCategories);
  const shoppingCart = useSelector((state) => state.shoppingCart.shoppingCart);
  const count = useSelector((state) => state.shoppingCart.count);
  const logged = useSelector((state) => state.user.logged);
  const dispatch = useDispatch();
  const loggedUser = JSON.parse(localStorage.getItem('user'));
  const localStorageShoppingCart = JSON.parse(localStorage.getItem('shoppingCart'));
  const localStorageCount = JSON.parse(localStorage.getItem('count'));
  const token = useSelector((state) => state.user.user.token);
  const stateWidth = useSelector((state) => state.navigation.width);
  //
  // getting screen size in state
  //

  function getWindowWidth() {
    const { width } = window.screen;
    return width;
  }
  function getWindowHeight() {
    const { height } = window.screen;
    return height;
  }

  useEffect(() => {
    dispatch(setWidth(getWindowWidth()));
    dispatch(setHeight(getWindowHeight()));
    function handleWindowSize() {
      dispatch(setWidth(getWindowWidth()));
      dispatch(setHeight(getWindowHeight()));
    }
    window.addEventListener('resize', handleWindowSize);
  }, []);
  //
  // set data and user
  //
  useEffect(() => {
    if (loggedUser) {
      dispatch(setToken(loggedUser.token));
      dispatch(getDepotsList());
      dispatch(getCarts());
      dispatch(getProducts());
      dispatch(getCategories());
      dispatch(getOrderHistory());
    }
    if (token) {
      dispatch(setUser(token));
    }
  }, [token]);
  useEffect(() => {
    if (localStorageShoppingCart && localStorageShoppingCart.lenght !== 0) {
      dispatch(pushInCart(localStorageShoppingCart.shoppingCart));
    }
    if (localStorageCount && localStorageCount !== 0) {
      dispatch(setCount(localStorageCount.count));
    }
  }, []);
  useEffect(() => {
    dispatch(setCartAmount());
    setLocalStorageShoppingCart(shoppingCart);
    setLocalStorageCount(count);
  }, [shoppingCart, count]);
  //
  //
  if ((loadingProducts && logged)
  || (loadingCategories && logged)
  ) {
    return <Loading />;
  }
  //
  //
  if (stateWidth >= 1024) {
    return (
      <div className="app">
        {(!logged && !loggedUser) && (
          <>
            <Modal />
            <AnimatePresence mode="wait" onExitComplete={() => dispatch(setShowModal(false))}>
              <LoginForm />
            </AnimatePresence>
          </>
        )}
        {(logged)
    && (
    <AnimatedRoutesLargeScreen />
    )}
      </div>
    );
  }
  //
  //
  return (
    <div className="app">

      {(!logged && !loggedUser)
      && (
      <>
        <Modal />
        <AnimatePresence mode="wait" onExitComplete={() => dispatch(setShowModal(false))}>
          <LoginForm />
        </AnimatePresence>
      </>
      )}
      {(logged)
    && (
    <AnimatedRoutesSmallScreen />
    )}

    </div>
  );
}

// == Export
export default App;
