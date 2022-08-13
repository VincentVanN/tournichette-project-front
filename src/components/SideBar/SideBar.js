import { NavLink } from 'react-router-dom';
import './sideBar.scss';

function SideBar() {
  return (
    <nav>
      <div className="navbar">
        <div className="container nav-container">
          <input className="checkbox" type="checkbox" name="" id="" />
          <div className="hamburger-lines">
            <span className="line line1" />
            <span className="line line2" />
            <span className="line line3" />
          </div>
          <div className="menu-items">
            <NavLink className="navlink" to="/profil/{slug}">Profil</NavLink>
            <NavLink className="navlink" to="/panier">Panier d'achat</NavLink>
            <NavLink className="navlink" to="/apropos">Qui sommes-nous?</NavLink>
          </div>
          <div className="logo">la Tournichette</div>
        </div>
      </div>
    </nav>
  );
}

export default SideBar;
