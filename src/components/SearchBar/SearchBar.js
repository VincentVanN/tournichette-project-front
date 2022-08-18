import PropTypes from 'prop-types';

function SearchBar({ type, placeholder, onChange }) {
  const handleChange = (e) => (onChange(e.target.value));
  return (
    <input
      type={type}
      placeholder={placeholder}
      className="searchbar_input"
      onChange={handleChange}
    />
  );
}
SearchBar.propTypes = {
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
export default SearchBar;
