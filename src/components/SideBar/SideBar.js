import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { logout, setSecondaryMenu } from '../../feature/user.slice';
import './sideBar.scss';

function SideBar() {
  const firstname = useSelector((state) => state.user.firstname);
  const slug = useSelector((state) => state.user.slug);
  const isSecondaryMenu = useSelector((state) => state.user.isSecondaryMenu);
  const dispatch = useDispatch();
  const handlerClick = () => dispatch(setSecondaryMenu());
  const handleLogout = () => dispatch(logout());

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
          {(!isSecondaryMenu && (

          <div className="menu-items">
            <NavLink className="navlink" to={`/profil/${slug}`}>Ton profil</NavLink>
            <NavLink className="navlink" to="/produits">Nos produits</NavLink>
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
              <NavLink className="navlink" to="/CGU">Conditions générales d'utilisation</NavLink>
              <NavLink className="navlink" to="/produits">Mentions légales</NavLink>
              <NavLink className="navlink" to="/La-Dev-Team">La Dev Team</NavLink>
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
          <div className="log">
            <div className="login">{`hello ${firstname}!`}</div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default SideBar;
