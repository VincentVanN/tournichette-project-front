// == Import
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { Route, Routes } from 'react-router';
import './app.scss';
import { setUser } from '../../AsyncChunk/AsyncChunkUser';

import Loading from '../Loading/Loading';
import LoginForm from '../LoginForm/LoginForm';
import Home from '../Home/Home';
// import AboutUs from '../AboutUs/AboutUs';
import Product from '../Product/Product';
import Cgu from '../Cgu/Cgu';
import LegalNotice from '../LegalNotice/LegalNotice';
import Contact from '../Contact/Contact';
import DevTeam from '../DevTeam/DevTeam';
import User from '../User/User';
import Products from '../Products/Products';
import NotFound from '../NotFound/NotFound';
import Orders from '../User/Orders';
import UserContact from '../User/UserContact';
import ShoppingCart from '../ShoppingCart/ShoppingCart';
import { getCarts, getCategories, getProducts } from '../../AsyncChunk/AsyncChunkPoducts';
import { setToken } from '../../feature/user.slice';
import { setCartAmount } from '../../feature/shoppingCart.slice';
import { getDepotsList } from '../../AsyncChunk/AsyncChunkShoppingCart';
import { setHeight, setWidth } from '../../feature/navigation.slice';

function App() {
  const loadingProducts = useSelector((state) => state.products.loadingProducts);
  const loadingCategories = useSelector((state) => state.products.loadingCategories);
  const shoppingCart = useSelector((state) => state.shoppingCart.shoppingCart);
  const logged = useSelector((state) => state.user.logged);
  const dispatch = useDispatch();
  const loggedUser = JSON.parse(localStorage.getItem('user'));
  const token = useSelector((state) => state.user.user.token);
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
    }
    if (token) {
      dispatch(setUser(token));
      console.log('setUser with LocalStorage');
    }
    dispatch(getDepotsList());
    dispatch(getCarts());
    dispatch(getProducts());
    dispatch(getCategories());
  }, [token]);
  useEffect(() => {
    dispatch(setCartAmount());
  }, [shoppingCart]);
  if ((loadingProducts && logged) || (loadingCategories && logged)) {
    return <Loading />;
  }
  return (
    <div className="app">

      {(!logged && !loggedUser) && <LoginForm />}
      {(logged)
    && (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/categorie/:slug" element={<Products />} />
        <Route path="/profil/" element={<User />} />
        <Route path="/profil/historique" element={<Orders />} />
        <Route path="/profil/coordonnees" element={<UserContact />} />
        <Route path="/panier" element={<ShoppingCart />} />
        <Route path="/produit/:slug" element={<Product />} />
        <Route path="/produits" element={<Products related="products" />} />
        <Route path="/paniers" element={<Products related="carts" />} />
        <Route path="/produit/paniers/:slug" element={<Product />} />
        {/* <Route path="/apropos" element={<AboutUs />} /> */}
        <Route path="/CGU" element={<Cgu />} />
        <Route path="/mentions-legales" element={<LegalNotice />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/La-Dev-Team" element={<DevTeam />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    )}

    </div>
  );
}

// == Export
export default App;
