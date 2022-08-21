import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useNavigate } from 'react-router-dom';
import logo from 'src/assets/logo-noName.svg';
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
              <div className="header">
                <div className="login">{`hello ${firstname}!`}</div>
                {countOfProducts !== 0 && (
                  <div className="cart">
                    <div className="count">
                      <p>
                        {countOfProducts}
                      </p>
                    </div>
                    <div className="icon">
                      <ion-icon name="cart-outline" style={{ fontSize: '45px' }} />
                    </div>
                  </div>
                )}
              </div>
              <img src={logo} alt="logo tournichette" className="logo" />
              <NavLink className="navlink" to="/">Accueil</NavLink>
              <NavLink className="navlink" to="/profil">Mon profil</NavLink>
              <NavLink className="navlink" to="/produits">Nos produits</NavLink>
              <NavLink className="navlink" to="/panier">Panier d'achat</NavLink>
              <NavLink className="navlink" to="/contact">Nous contacter</NavLink>
              <NavLink className="navlink" to="/apropos">Qui sommes-nous?</NavLink>
              <div
                className="logout"
                onClick={handleLogout}
              >
                <ion-icon name="exit-outline" style={{ fontSize: '45px' }} />
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
                <ion-icon name="exit-outline" style={{ fontSize: '45px' }} />
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
