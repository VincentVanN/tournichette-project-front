import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { logout } from '../../feature/user.slice';
import './sideBar.scss';

function SideBar() {
  const firstname = useSelector((state) => state.user.firstname);
  const dispatch = useDispatch();
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
            <div className="logout">
              <ion-icon size="large" name="exit-outline" />
            </div>

          </div>
          <div className="log">
            <div className="login">{`hello ${firstname}!`}</div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default SideBar;
