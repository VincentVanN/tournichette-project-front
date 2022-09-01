import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useNavigate } from 'react-router-dom';
import logo from 'src/assets/logo-noName.svg';
import { logout, setSecondaryMenu } from '../../feature/user.slice';
import CartWithCount from '../CartWithCount/CartWithCount';
import './sideBar.scss';

function SideBar() {
  const isSecondaryMenu = useSelector((state) => state.user.isSecondaryMenu);
  const width = useSelector((state) => state.navigation.width);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handlerClick = () => dispatch(setSecondaryMenu());
  const handleLogout = () => {
    navigate('/');
    dispatch(logout());
  };
  const [isOpen, setIsOpen] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const handleCheck = () => setIsChecked(!isChecked);
  const handleOpen = () => setIsOpen(!isOpen);
  const className = ({ isActive }) => (isActive ? 'selected' : '');
  let classNameLi;
  if (className === 'selected') {
    classNameLi = 'selected';
    return classNameLi;
  }
  if (width > 576) {
    return (
      <div className={`navigation ${isOpen ? 'active' : ''}`}>
        <ul>
          <li className={classNameLi}>
            <NavLink className={`link ${className}`} to="/">
              <span className="icon">
                <ion-icon name="home-outline" />
              </span>
              <span className="titleIcon">Accueil</span>
            </NavLink>
          </li>
          <li>
            <NavLink className={`link ${className}`} to="/profil">
              <span className="icon">
                <ion-icon name="person-outline" />
              </span>
              <span className="titleIcon">Profil</span>
            </NavLink>
          </li>
          <li>
            <NavLink className={`link ${className}`} to="/NosPaniers">
              <span className="icon">
                <ion-icon name="bag-outline" />
              </span>
              <span className="titleIcon">Paniers</span>
            </NavLink>
          </li>
          <li>
            <NavLink className={`link ${className}`} to="/liste">
              <span className="icon">
                <ion-icon name="rose-outline" />
              </span>
              <span className="titleIcon">Au détail</span>
            </NavLink>
          </li>
          <li>
            <NavLink className={`link ${className}`} to="/MesAchats">
              <span className="icon">
                <ion-icon name="cart-outline" />
              </span>
              <span className="titleIcon">Tes achats</span>
            </NavLink>
          </li>
          <li>
            <NavLink className={`link ${className}`} to="/contact">
              <span className="icon">
                <ion-icon name="mail-outline" />
              </span>
              <span className="titleIcon">Contact</span>
            </NavLink>
          </li>
          <li>
            <NavLink className={`link ${className}`} to="/apropos">
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
              <CartWithCount />
              <img src={logo} alt="logo tournichette" className="logo" />
              <NavLink className={`navlink ${className}`} onClick={handleCheck} to="/">Accueil</NavLink>
              <NavLink className={`navlink ${className}`} onClick={handleCheck} to="/profil">Mon profil</NavLink>
              <NavLink className={`navlink ${className}`} onClick={handleCheck} to="/NosPaniers">Paniers</NavLink>
              <NavLink className={`navlink ${className}`} onClick={handleCheck} to="/liste">Au détail</NavLink>
              <NavLink className={`navlink ${className}`} onClick={handleCheck} to="/MesAchats">Tes achats</NavLink>
              <NavLink className={`navlink ${className}`} onClick={handleCheck} to="/contact">Nous contacter</NavLink>
              <NavLink className={`navlink ${className}`} onClick={handleCheck} to="/apropos">Qui sommes-nous?</NavLink>
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
