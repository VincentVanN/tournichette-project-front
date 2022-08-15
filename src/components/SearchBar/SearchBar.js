function SearchBar() {
  return (
    <>
      <div className="searchbar">
        <input
          type="text"
          placeholder="Rechercher..."
        />
      </div>
      <div className="search_result">
        <div>trouvés</div>
      </div>
    </>
  );
}

export default SearchBar;
