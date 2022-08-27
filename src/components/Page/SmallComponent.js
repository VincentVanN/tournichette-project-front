import PropTypes from 'prop-types';

function SmallComponent({ children }) {
  return (
    <div className="smallComponent">
      {children}
    </div>
  );
}
SmallComponent.propTypes = {
  children: PropTypes.node.isRequired,
};
export default SmallComponent;
