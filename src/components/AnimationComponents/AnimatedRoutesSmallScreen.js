import { Route, Routes, useLocation } from 'react-router';
import Cgu from '../Cgu/Cgu';
import Contact from '../Contact/Contact';
import DevTeam from '../DevTeam/DevTeam';
import Home from '../Home/Home';
import AboutUs from '../AboutUs/AboutUs';
import LegalNotice from '../LegalNotice/LegalNotice';
import NotFound from '../NotFound/NotFound';
import ProductRendering from '../Product/ProductRendering';
import ProductsRendering from '../Products/ProductsRendering';
import ShoppingCartRendering from '../ShoppingCart/ShoppingCartRendering';
import OrdersRendering from '../User/OrdersRendering';
import UserContactRendering from '../User/UserContactRendering';
import UserRendering from '../User/UserRendering';

function AnimatedRoutesSmallScreen() {
  return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/categorie/:slugCategory" element={<ProductsRendering />} />
        <Route path="/profil" element={<UserRendering />} />
        <Route path="/profil/historique" element={<OrdersRendering />} />
        <Route path="/profil/coordonnees" element={<UserContactRendering />} />
        <Route path="/MesAchats" element={<ShoppingCartRendering />} />
        <Route path="/produit/:slugProduct" element={<ProductRendering />} />
        <Route path="/liste" element={<ProductsRendering related="products" />} />
        <Route path="/NosPaniers" element={<ProductsRendering related="carts" />} />
        <Route path="/paniers/:slugCart" element={<ProductRendering />} />
        <Route path="/categorie/:slugCategory/:slugProduct" element={<ProductRendering />} />
        <Route path="/apropos" element={<AboutUs />} />
        <Route path="/CGU" element={<Cgu />} />
        <Route path="/mentions-legales" element={<LegalNotice />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/La-Dev-Team" element={<DevTeam />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
  );
}

export default AnimatedRoutesSmallScreen;
