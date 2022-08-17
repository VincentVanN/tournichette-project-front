import { useSelector } from 'react-redux';
import 'src/components/SearchBar/searchBar.scss';

function SearchBar() {
  const products = useSelector((state) => state.products.products);

  const handleSearchValue = (e) => {
    console.log(e.target.value);
    let value = e.target.value;
  };
  return (
    <>
      <div className="searchbar">
        <input
          type="text"
          placeholder="Rechercher..."
          className="searchbar_input"
          onChange={handleSearchValue}
        />
      </div>
      <div className="search_result">
        <div>trouvés</div>
      </div>
    </>
  );
}

export default SearchBar;
