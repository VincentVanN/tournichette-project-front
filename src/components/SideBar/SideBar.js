import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useNavigate } from 'react-router-dom';
import logo from 'src/assets/logo-noName.svg';
import { logout, setSecondaryMenu } from '../../feature/user.slice';
import './sideBar.scss';

function SideBar() {
  const firstname = useSelector((state) => state.user.user.firstname);
  const isSecondaryMenu = useSelector((state) => state.user.isSecondaryMenu);
  const width = useSelector((state) => state.navigation.width);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handlerClick = () => dispatch(setSecondaryMenu());
  const handleLogout = () => {
    navigate('/');
    dispatch(logout());
  };
  const countOfProducts = useSelector((state) => state.shoppingCart.count);
  const [isOpen, setIsOpen] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const handleCheck = () => setIsChecked(!isChecked);
  const handleOpen = () => setIsOpen(!isOpen);
  if (width > 576) {
    return (
      <div className="navigation">
        <ul>
          <li>
            <NavLink to="/">
              <span className="icon">
                <ion-icon name="home-outline" />
              </span>
              <span className="titleIcon">Accueil</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/profil">
              <span className="icon">
                <ion-icon name="person-outline" />
              </span>
              <span className="titleIcon">Profil</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/listePaniers">
              <span className="icon">
                <ion-icon name="bag-outline" />
              </span>
              <span className="titleIcon">Les paniers</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/liste">
              <span className="icon">
                <ion-icon name="rose-outline" />
              </span>
              <span className="titleIcon">le Détail</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/panier">
              <span className="icon">
                <ion-icon name="cart-outline" />
              </span>
              <span className="titleIcon">Ton panier d'achat</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact">
              <span className="icon">
                <ion-icon name="mail-outline" />
              </span>
              <span className="titleIcon">Contact</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/apropos">
              <span className="icon">
                <ion-icon name="help-outline" />
              </span>
              <span className="titleIcon">Qui sommes nous?</span>
            </NavLink>
          </li>
          <li onClick={handleLogout}>
            <a href="">
              <span className="icon">
                <ion-icon name="log-out-outline" />
              </span>
              <span className="titleIcon">Se déconnecter</span>
            </a>

          </li>
        </ul>
        <div
          className="toggle"
          onClick={handleOpen}
        />
      </div>
    );
  }
  return (
    <nav>
      <div className="navbar">
        <div className="nav nav-container">
          <input
            className="checkbox"
            type="checkbox"
            checked={isChecked}
            onClick={handleCheck}
          />
          <div
            className="hamburger-lines"
            onClick={handleCheck}
          >
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
              <NavLink className="navlink" onClick={handleCheck} to="/">Accueil</NavLink>
              <NavLink className="navlink" onClick={handleCheck} to="/profil">Mon profil</NavLink>
              <NavLink className="navlink" onClick={handleCheck} to="/listePaniers">Les paniers</NavLink>
              <NavLink className="navlink" onClick={handleCheck} to="/liste">Le détail</NavLink>
              <NavLink className="navlink" onClick={handleCheck} to="/panier">Panier d'achat</NavLink>
              <NavLink className="navlink" onClick={handleCheck} to="/contact">Nous contacter</NavLink>
              <NavLink className="navlink" onClick={handleCheck} to="/apropos">Qui sommes-nous?</NavLink>
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
