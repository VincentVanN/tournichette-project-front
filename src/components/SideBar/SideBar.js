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

  // if (screen > 576) {
  //   return (
  //     <nav className="nav">
  //       <div className="container">
  //         <div style={{ width: isOpen ? '200px' : '50px' }} className="sidebars">
  //           <div className="top_section">
  //             <div style={{ marginLeft: isOpen ? '100px' : '0px' }} className="bars">
  //               <ion-icon name="menu-outline" onClick={toggle} />
  //             </div>
  //           </div>

  //           <div className="menu-items">
  //             <div className="header">
  //               <div className="logins">{`hello ${firstname}!`}</div>
  //               {countOfProducts !== 0 && (
  //               <div className="cart">
  //                 <div className="count">
  //                   <p>
  //                     {countOfProducts}
  //                   </p>
  //                 </div>
  //                 <div className="icon">
  //                   <ion-icon name="cart-outline" style={{ fontSize: '30px' }} />
  //                 </div>
  //               </div>
  //               )}
  //             </div>
  //             {/* <img src={logo} alt="logo tournichette" className="logo" /> */}
  //             <ul>
  //               <li>
  //                 <span className="icon"><ion-icon name="home-outline" /></span>
  //                 <NavLink className="navlink-more" activeclassName="active" style={{ display: isOpen ? 'block' : 'none' }} to="/">Accueil</NavLink>
  //               </li>
  //               <li>
  //                 <span className="icon"><ion-icon name="happy-outline" /></span>
  //                 <NavLink className="navlink-more" activeclassName="active" style={{ display: isOpen ? 'block' : 'none' }} to="/profil">Mon profil</NavLink>
  //               </li>
  //               <li>
  //                 <span className="icon"><ion-icon name="leaf-outline" /></span>
  //                 <NavLink className="navlink-more" activeclassName="active" style={{ display: isOpen ? 'block' : 'none' }} to="/paniers">Les paniers</NavLink>
  //               </li>
  //               <li>
  //                 <span className="icon"><ion-icon name="leaf-outline" /></span>
  //                 <NavLink className="navlink-more" activeclassName="active" style={{ display: isOpen ? 'block' : 'none' }} to="/produits">Le détail</NavLink>
  //               </li>
  //               <li>
  //                 <span className="icon"><ion-icon name="cart-outline" /></span>
  //                 <NavLink className="navlink-more" activeclassName="active" style={{ display: isOpen ? 'block' : 'none' }} to="/panier">Panier d'achat</NavLink>
  //               </li>
  //               <li>
  //                 <span className="icon"><ion-icon name="mail-outline" /></span>
  //                 <NavLink className="navlink-more" activeclassName="active" style={{ display: isOpen ? 'block' : 'none' }} to="/contact">Nous contacter</NavLink>
  //               </li>
  //               <li>
  //                 <span className="icon"><ion-icon name="help-outline" /></span>
  //                 <NavLink className="navlink-more" activeclassName="active" style={{ display: isOpen ? 'block' : 'none' }} to="/apropos">Qui sommes-nous?</NavLink>
  //               </li>
  //               <li>
  //                 <NavLink className="navlink-more" activeclassName="active" style={{ display: isOpen ? 'block' : 'none' }} to="/La-Dev-Team">La Dev Team</NavLink>
  //               </li>
  //               <li>
  //                 <NavLink className="navlink-more" activeclassName="active" style={{ display: isOpen ? 'block' : 'none' }} to="/CGU">CGU</NavLink>
  //               </li>
  //               <li>
  //                 <NavLink className="navlink-more" activeclassName="active" style={{ display: isOpen ? 'block' : 'none' }} to="/mentions-legales">Mentions légales</NavLink>
  //               </li>
  //             </ul>
  //             <div
  //               className="logout"
  //               onClick={handleLogout}
  //             >
  //               <ion-icon name="exit-outline" style={{ fontSize: '35px' }} />
  //             </div>
  //             <div
  //               className="more"
  //               onClick={handlerClick}
  //             />
  //           </div>
  //         </div>
  //       </div>
  //     </nav>
  //   );
  // }
  const [isOpen, setIsOpen] = useState(false);
  const handleOpen = () => setIsOpen(!isOpen);
  if (width > 576) {
    return (
      <div className={`navigation ${isOpen ? 'active' : ''}`}>
        <ul>
          <li><a href="#">
            <span className="icon">
              <ion-icon name="home-outline" />
            </span>
            <span className="titleIcon">Accueil</span>
              </a>
          </li>
          <li><a href="#">
            <span className="icon">
              <ion-icon name="person-outline" />
            </span>
            <span className="titleIcon">Profil</span>
              </a>
          </li>
          <li><a href="#">
            <span className="icon">
              <ion-icon name="bag-outline" />
            </span>
            <span className="titleIcon">Les paniers</span>
              </a>
          </li>
          <li><a href="#">
            <span className="icon">
              <ion-icon name="rose-outline" />
            </span>
            <span className="titleIcon">le Détail</span>
              </a>
          </li>
          <li><a href="#">
            <span className="icon">
              <ion-icon name="cart-outline" />
            </span>
            <span className="titleIcon">Ton panier d'achat</span>
              </a>
          </li>
          <li><a href="#">
            <span className="icon">
              <ion-icon name="mail-outline" />
            </span>
            <span className="titleIcon">Contact</span>
              </a>
          </li>
          <li><a href="#">
            <span className="icon">
              <ion-icon name="help-outline" />
            </span>
            <span className="titleIcon">Qui sommes nous?</span>
              </a>
          </li>
          <li><a href="#">
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
              <NavLink className="navlink" to="/paniers">Les paniers</NavLink>
              <NavLink className="navlink" to="/produits">Le détail</NavLink>
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
