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

export default SearchBar;
