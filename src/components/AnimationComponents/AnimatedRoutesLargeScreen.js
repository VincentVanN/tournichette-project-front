import { Route, Routes, useLocation } from 'react-router';
import { AnimatePresence } from 'framer-motion';
import Cgu from '../Cgu/Cgu';
import Contact from '../Contact/Contact';
import DevTeam from '../DevTeam/DevTeam';
import Home from '../Home/Home';
import AboutUs from '../AboutUs/AboutUs';
import LegalNotice from '../LegalNotice/LegalNotice';
import NotFound from '../NotFound/NotFound';
import SinglePage from '../Page/SinglePage';

function AnimatedRoutesLargeScreen() {
  const location = useLocation();

  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/liste" element={<SinglePage />} />
        <Route path="/produit/:slugProduct" element={<SinglePage />} />
        <Route path="/categorie/:slugCategory" element={<SinglePage />} />
        <Route path="/categorie/:slugCategory/:slugProduct" element={<SinglePage />} />
        <Route path="/paniers/:slugCart" element={<SinglePage />} />
        <Route path="/NosPaniers" element={<SinglePage />} />
        <Route path="/profil" element={<SinglePage />} />
        <Route path="/MesAchats" element={<SinglePage />} />
        <Route path="/apropos" element={<AboutUs />} />
        <Route path="/CGU" element={<Cgu />} />
        <Route path="/mentions-legales" element={<LegalNotice />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/La-Dev-Team" element={<DevTeam />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </AnimatePresence>

  );
}
export default AnimatedRoutesLargeScreen;
