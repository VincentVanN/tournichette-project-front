// == Import
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { Route, Routes } from 'react-router';

import './app.scss';
import { setProductsData } from '../../feature/products.slice';
import { setUser } from '../../feature/user.slice';

import Loading from './Loading/Loading';
import LoginForm from '../LoginForm/LoginForm';
import Home from '../Home/Home';
import AboutUs from '../AboutUs/AboutUs';
import Product from '../Product/Product';
import Cgu from '../Cgu/Cgu';
import LegalNotice from '../LegalNotice/LegalNotice';
import Contact from '../Contact/Contact';
import DevTeam from '../DevTeam/DevTeam';
import User from '../User/User';
import Category from '../Category/Category';
import Products from '../Products/Products';
import NotFound from '../NotFound/NotFound';

function App() {
  const loading = useSelector((state) => state.products.loading);
  const logged = useSelector((state) => state.user.logged);
  const dispatch = useDispatch();

  useEffect(() => {
    const loggedUser = JSON.parse(localStorage.getItem('user'));
    if (loggedUser) {
      dispatch(setUser(loggedUser.slug, loggedUser.token));
    }
    dispatch(setProductsData());
  }, []);
  if (loading) {
    return <Loading />;
  }
  return (
    <div className="app">

      {(!logged) && <LoginForm />}
      {(logged)
    && (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/categorie/:slug" element={<Category />} />
        <Route path="/profil/:slug" element={<User />} />
        <Route path="/produit/:slug" element={<Product />} />
        <Route path="/produits" element={<Products />} />
        <Route path="/apropos" element={<AboutUs />} />
        <Route path="/CGU" element={<Cgu />} />
        <Route path="/mentions-légales" element={<LegalNotice />} />
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
