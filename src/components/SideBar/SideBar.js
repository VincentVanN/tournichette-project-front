import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useNavigate } from 'react-router-dom';
import { logout, setSecondaryMenu } from '../../feature/user.slice';
import './sideBar.scss';

function SideBar() {
  const firstname = useSelector((state) => state.user.user.firstname);
  const isSecondaryMenu = useSelector((state) => state.user.isSecondaryMenu);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handlerClick = () => dispatch(setSecondaryMenu());
  const handleLogout = () => {
    navigate('/');
    dispatch(logout());
  };
  const countOfProducts = useSelector((state) => state.shoppingCart.count);
  return (
    <nav>
      <div className="navbar">
        <div className="nav nav-container">
          <input className="checkbox" type="checkbox" />
          <div className="hamburger-lines">
            <span className="line line1" />
            <span className="line line2" />
            <span className="line line3" />
          </div>
          {(!isSecondaryMenu && (
            <div className="menu-items">
              <div className="login">{`hello ${firstname}!`}</div>
              <NavLink className="navlink" to="/">Accueil</NavLink>
              <NavLink className="navlink" to="/profil">Mon profil</NavLink>
              <div className="shoppingCart">
                <NavLink className="navlink" to="/produits">Nos produits</NavLink>
                {countOfProducts !== 0 && <div className="count">{countOfProducts}</div>}
              </div>
              <NavLink className="navlink" to="/panier">Panier d'achat</NavLink>
              <NavLink className="navlink" to="/contact">Nous contacter</NavLink>
              <NavLink className="navlink" to="/apropos">Qui sommes-nous?</NavLink>
              <div
                className="logout"
                onClick={handleLogout}
              >
                <ion-icon size="large" name="exit-outline" />
              </div>
              <div
                className="more"
                onClick={handlerClick}
              >...
              </div>
            </div>
          ))}
          {(isSecondaryMenu && (

            <div className="menu-items">
              <NavLink className="navlink" to="/La-Dev-Team">La Dev Team</NavLink>
              <NavLink className="navlink" to="/CGU">Conditions générales d'utilisation</NavLink>
              <NavLink className="navlink" to="/mentions-legales">Mentions légales</NavLink>
              <div
                className="logout"
                onClick={handleLogout}
              >
                <ion-icon size="large" name="exit-outline" />
              </div>
              <div
                className="more"
                onClick={handlerClick}
              >...
              </div>
            </div>
          ))}
        </div>
      </div>
    </nav>
  );
}

export default SideBar;
