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
import Cgu from '../Cgu/Cgu';
import LegalNotice from '../LegalNotice/LegalNotice';
import Contact from '../Contact/Contact';
import DevTeam from '../DevTeam/DevTeam';
import NotFound from '../NotFound/NotFound';
import { getCarts, getCategories, getProducts } from '../../AsyncChunk/AsyncChunkPoducts';
import { setToken } from '../../feature/user.slice';
import { setCartAmount } from '../../feature/shoppingCart.slice';
import { getDepotsList } from '../../AsyncChunk/AsyncChunkShoppingCart';
import { setHeight, setWidth } from '../../feature/navigation.slice';
import SinglePage from '../Page/SinglePage';
import ProductsRendering from '../Products/ProductsRendering';
import ProductRendering from '../Product/ProductRendering';
import ShoppingCartRendering from '../ShoppingCart/ShoppingCartRendering';
import UserContactRendering from '../User/UserContactRendering';
import OrdersRendering from '../User/OrdersRendering';

function App() {
  const loadingProducts = useSelector((state) => state.products.loadingProducts);
  const loadingCategories = useSelector((state) => state.products.loadingCategories);
  const shoppingCart = useSelector((state) => state.shoppingCart.shoppingCart);
  const logged = useSelector((state) => state.user.logged);
  const dispatch = useDispatch();
  const loggedUser = JSON.parse(localStorage.getItem('user'));
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
  if (stateWidth >= 1024) {
    return (
      <div className="app">

        {(!logged && !loggedUser) && <LoginForm />}
        {(logged)
    && (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/liste" element={<SinglePage />} />
        <Route path="/categorie/:slug" element={<SinglePage />} />
        <Route path="/profil" element={<SinglePage />} />
        <Route path="/panier" element={<SinglePage />} />
        <Route path="/produit/:slug" element={<SinglePage />} />
        <Route path="/listePaniers" element={<SinglePage />} />
        <Route path="/produit/paniers/:slug" element={<SinglePage />} />
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
  return (
    <div className="app">

      {(!logged && !loggedUser) && <LoginForm />}
      {(logged)
    && (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/categorie/:slug" element={<ProductsRendering />} />
        <Route path="/profil" element={<UserContactRendering />} />
        <Route path="/profil/historique" element={<OrdersRendering />} />
        <Route path="/profil/coordonnees" element={<UserContactRendering />} />
        <Route path="/panier" element={<ShoppingCartRendering />} />
        <Route path="/produit/:slug" element={<ProductRendering />} />
        <Route path="/liste" element={<ProductsRendering related="products" />} />
        <Route path="/listePaniers" element={<ProductsRendering related="carts" />} />
        <Route path="/produit/paniers/:slug" element={<ProductRendering />} />
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
