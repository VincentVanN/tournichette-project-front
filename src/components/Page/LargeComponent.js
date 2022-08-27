import PropTypes from 'prop-types';

function LargeComponent({ children }) {
  return (
    <div className="largeComponent">
      {children}
    </div>
  );
}
LargeComponent.propTypes = {
  children: PropTypes.node.isRequired,
};
export default LargeComponent;
