import { NavLink } from 'react-router-dom';

// Components

import './footer.scss';

function Footer() {
  return (
    <nav className="footer">
      <NavLink to="/CGU">CGU</NavLink>
      <NavLink to="/contact">Contact</NavLink>
      <NavLink to="/Mentions">Mentions Légales</NavLink>
      <NavLink to="/DevTeam">La Team Développeur</NavLink>
    </nav>
  );
}

export default Footer;
