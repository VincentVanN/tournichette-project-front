/* eslint-disable react/require-default-props */
import '../loginForm.scss';
import PropTypes from 'prop-types';
import { useState } from 'react';

function Field({
  name,
  type,
  value,
  placeholder,
  onChange,
  onFocus,
  onBlur,
}) {
  const handleChange = (evt) => {
    onChange(evt.target.value, name);
  };
  const [isVisible, setIsVisible] = useState(false);
  const eyeOff = (isVisible ? 'off-' : '');
  const handleClick = () => setIsVisible(!isVisible);
  return (
    <div className="field">
      <div className="field field-container">
        <input
          value={value}
          onChange={handleChange}
          type={isVisible ? 'text' : type}
          className="field-input"
          placeholder={placeholder}
          name={name}
          autoComplete={name === 'password' || name === 'sndPassword' ? 'current-password' : name}
          {...((name === 'password' || name === 'sndPassword') && { onFocus: onFocus })}
          {...((name === 'password' || name === 'sndPassword') && { onBlur: onBlur })}
        />
        {(name === 'password' || name === 'sndPassword')
        && (
        <ion-icon
          name={`eye-${eyeOff}outline`}
          className="field eye"
          onClick={handleClick}
        />
        )}
      </div>
    </div>

  );
}
Field.propTypes = {
  value: PropTypes.string,
  type: PropTypes.string,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  onFocus: PropTypes.func,
  onBlur: PropTypes.func,
};
Field.defaultProps = {
  placeholder: '',
  value: '',
  type: 'text',
};

export default Field;
