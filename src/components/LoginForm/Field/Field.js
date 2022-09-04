/* eslint-disable react/require-default-props */
import '../loginForm.scss';
import PropTypes from 'prop-types';
// import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
// import { isValidEmail } from '../../../utils/formValidation';
// import { setErrorMessage } from '../../../feature/user.slice';
// import Error from '../../Error/Error';

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
      {/* (errorMessage && name === 'email' && email) && <Error /> */}
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
