/* eslint-disable react/jsx-no-bind */
/* eslint-disable no-return-assign */
import PropTypes from 'prop-types';
import Button from '../Button/Button';
import './socialNetwork.scss';

function SocialNetwork({ widthDiv }) {
  function onEmailClick() {
    window.open('mailto:panier@tournichette.fr');
  }
  return (
    <div
      className="socialNetwork-container"
      style={{ width: widthDiv || '' }}
    >
      <a href="https://facebook.com/tournichette/" target="_blank" rel="noreferrer">
        <Button text="Facebook" icon="logo-facebook" size="2.5em" />
      </a>
      <a href="https://tournichette.wordpress.com/" target="_blank" rel="noreferrer">
        <Button text="Blog WordPress" icon="logo-wordpress" size="2.5em" />
      </a>
      <Button
        text="Nous contacter"
        icon="mail-outline"
        size="2.5em"
        onClick={onEmailClick}
      />
      <a href="https://www.instagram.com/imagiraphe/" target="_blank" rel="noreferrer">
        <Button text="Instagram" icon="logo-instagram" size="2.5em" />
      </a>
      <Button text="09.81.73.12.87" icon="call-outline" size="2.5em" />
    </div>
  );
}
SocialNetwork.propTypes = {
  widthDiv: PropTypes.string,
};
SocialNetwork.defaultProps = {
  widthDiv: undefined,
};
export default SocialNetwork;
