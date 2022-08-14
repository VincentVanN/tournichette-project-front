/* eslint-disable react/require-default-props */
import './field.scss';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { isValidEmail } from '../../../utils/formValidation';
import { setError } from '../../../feature/user.slice';
import Error from '../../Error/Error';

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
  const errorMessage = useSelector((state) => state.user.errorMessage);
  if (name === 'email') {
    const dispatch = useDispatch();
    if (!isValidEmail('login')) {
      dispatch(setError('Email invalide'));
    }
    else {
      dispatch(setError(''));
    }
  }

  return (
    <div className="field">
      <input
        value={value}
        onChange={handleChange}
        type={type}
        className="field-input"
        placeholder={placeholder}
        name={name}
      />
      {(errorMessage && name === 'email') && <Error />}
    </div>

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
