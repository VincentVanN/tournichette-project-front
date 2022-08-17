import PropTypes from 'prop-types';
import './user.scss';

function Field({
  name, type, value, onChange, className,
}) {
  const handleChange = (e) => {
    onChange(e.target.value, name);
  };
  return (
    <input
      className={className}
      value={value}
      type={type}
      name={name}
      onChange={handleChange}
    />

  );
}
Field.propTypes = {
  className: PropTypes.string.isRequired,
  value: PropTypes.string,
  type: PropTypes.string,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,

};
Field.defaultProps = {
  value: '',
  type: 'text',
};

export default Field;
