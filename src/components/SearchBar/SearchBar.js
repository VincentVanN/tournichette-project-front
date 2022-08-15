import 'src/components/SearchBar/searchBar.scss';
function SearchBar() {
  return (
    <>
      <div className="searchbar">
        <input
          type="text"
          placeholder="Rechercher..."
          className="searchbar_input"
        />
      </div>
      <div className="search_result">
        <div>trouvés</div>
      </div>
    </>
  );
}

export default SearchBar;
