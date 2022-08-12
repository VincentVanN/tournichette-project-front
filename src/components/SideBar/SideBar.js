import { NavLink } from 'react-router-dom';

function SideBar() {
  return (
    <nav className="sideBar">
      <NavLink to="/profil/{slug}">Profil</NavLink>
      <NavLink to="/panier">Panier d'achat</NavLink>
      <NavLink to="/apropos">Qui sommes-nous?</NavLink>
    </nav>
  );
}

export default SideBar;
