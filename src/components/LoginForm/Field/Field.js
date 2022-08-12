// == Import : npm
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { changeLoginField } from '../../../feature/user.slice';

// == Import : local
import './field.scss';

// == Composant
function Field({
  ref,
  value,
  type,
  name,
  placeholder,
}) {
  const dispatch = useDispatch();
  const handleChange = (evt) => {
    const  value  = evt.target.value;
    console.log(name);
    dispatch(changeLoginField({ [name]: value }));
  };

  const inputId = `field-${name}`;

  return (
    <div className={value.length > 0 ? 'field field--has-content' : 'field'}>
      <input
        // React - state
        value={value}
        onChange={handleChange}
        // infos de base
        id={inputId}
        type={type}
        className="field-input"
        placeholder={placeholder}
        name={name}
        ref={ref}
      />

      <label
        htmlFor={inputId}
        className="field-label"
      >
        {placeholder}
      </label>
    </div>
  );
}

Field.propTypes = {
  value: PropTypes.string,
  type: PropTypes.string,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  ref: PropTypes.func.isRequired,
};

// Valeurs par défaut pour les props
Field.defaultProps = {
  value: '',
  type: 'text',
};

// == Export
export default Field;
