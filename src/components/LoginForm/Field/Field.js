/* eslint-disable react/require-default-props */
import './field.scss';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { isValidEmail } from '../../../utils/formValidation';
import { setErrorMessage } from '../../../feature/user.slice';
import Error from '../../Error/Error';

function Field({
  stateName,
  name,
  type,
  value,
  placeholder,
  onChange,
}) {
  const handleChange = (evt) => {
    onChange(evt.target.value, name);
  };
  const dispatch = useDispatch();
  const errorMessage = useSelector((state) => state.user.errorMessage);
  const email = useSelector((state) => state.user[stateName].email);
  const displayErrorMessage = (message) => dispatch(setErrorMessage(message));
  if (name === 'email') {
    if (!isValidEmail(stateName)) {
      displayErrorMessage('email invalide');
    }
    else (displayErrorMessage(''));
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
      {(errorMessage && name === 'email' && email) && <Error />}
    </div>

  );
}
Field.propTypes = {
  value: PropTypes.string,
  type: PropTypes.string,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  stateName: PropTypes.string.isRequired,
};
Field.defaultProps = {
  placeholder: '',
  value: '',
  type: 'text',
};

export default Field;