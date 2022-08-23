import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useNavigate } from 'react-router-dom';
// import logo from 'src/assets/logo-noName.svg';
import { logout, setSecondaryMenu } from '../../feature/user.slice';
import './sideBar1.scss';

function SideBar() {
  const firstname = useSelector((state) => state.user.user.firstname);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handlerClick = () => dispatch(setSecondaryMenu());
  const handleLogout = () => {
    navigate('/');
    dispatch(logout());
  };
  const countOfProducts = useSelector((state) => state.shoppingCart.count);

  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  return (
    <nav>
      <div className="container">
        <div style={{ width: isOpen ? '200px' : '50px' }} className="sidebar">
          <div className="top_section">
            <div style={{ marginLeft: isOpen ? '100px' : '0px' }} className="bars">
              <ion-icon name="menu-outline" onClick={toggle} />
            </div>
          </div>

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
                    <ion-icon name="cart-outline" style={{ fontSize: '30px' }} />
                  </div>
                </div>
              )}
            </div>
            {/* <img src={logo} alt="logo tournichette" className="logo" /> */}
            <ul>
              <li>
                <span className="icon"><ion-icon name="home-outline" /></span>
                <NavLink className="navlink" activeclassName="active" style={{ display: isOpen ? 'block' : 'none' }} to="/">Accueil</NavLink>
              </li>
              <li>
                <span className="icon"><ion-icon name="happy-outline" to="/profil" /></span>
                <NavLink className="navlink" activeclassName="active" style={{ display: isOpen ? 'block' : 'none' }} to="/profil">Mon profil</NavLink>
              </li>
              <li>
                <span className="icon"><ion-icon name="leaf-outline" /></span>
                <NavLink className="navlink" activeclassName="active" style={{ display: isOpen ? 'block' : 'none' }} to="/produits">Nos produits</NavLink>
              </li>
              <li>
                <span className="icon"><ion-icon name="cart-outline" /></span>
                <NavLink className="navlink" activeclassName="active" style={{ display: isOpen ? 'block' : 'none' }} to="/panier">Panier d'achat</NavLink>
              </li>
              <li>
                <span className="icon"><ion-icon name="mail-outline" /></span>
                <NavLink className="navlink" activeclassName="active" style={{ display: isOpen ? 'block' : 'none' }} to="/contact">Nous contacter</NavLink>
              </li>
              <li>
                <span className="icon"><ion-icon name="help-outline" /></span>
                <NavLink className="navlink" activeclassName="active" style={{ display: isOpen ? 'block' : 'none' }} to="/apropos">Qui sommes-nous?</NavLink>
              </li>
            </ul>
            <NavLink className="navlink" activeclassName="active" style={{ display: isOpen ? 'block' : 'none' }} to="/La-Dev-Team">La Dev Team</NavLink>
            <NavLink className="navlink" activeclassName="active" style={{ display: isOpen ? 'block' : 'none' }} to="/CGU">CGU</NavLink>
            <NavLink className="navlink" activeclassName="active" style={{ display: isOpen ? 'block' : 'none' }} to="/mentions-legales">Mentions légales</NavLink>
            <div
              className="logout"
              onClick={handleLogout}
            >
              <ion-icon name="exit-outline" style={{ fontSize: '35px' }} />
            </div>
            <div
              className="more"
              onClick={handlerClick}
            />
          </div>
        </div>
      </div>
    </nav>
  );
}

export default SideBar;
