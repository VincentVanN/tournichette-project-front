/* eslint-disable react/require-default-props */
import './field.scss';
import PropTypes from 'prop-types';

function Field({
  name,
  type,
  value,
  placeholder,
  onChange,
}) {
  const handleChange = (evt) => {
    onChange(evt.target.value, name);
  };
  const inputId = `field-${name}`;
  return (
    <input
      value={value}
      onChange={handleChange}
      type={type}
      id={inputId}
      className="field-input"
      placeholder={placeholder}
      name={name}
    />

  );
}
Field.propTypes = {
  value: PropTypes.string,
  type: PropTypes.string,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};
Field.defaultProps = {
  placeholder: '',
  value: '',
  type: 'text',
};

export default Field;
