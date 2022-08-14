import './products.scss';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import SearchBar from 'src/components/SearchBar/SearchBar';
import Page from '../Page/Page';

function Products() {
  const products = useSelector((state) => state.products.products);

  console.log(products);
  return (
    <div className="products_list">
      <Page>
        <div className="products_right">
          <h1>Liste des produits</h1>
          <SearchBar />
          <ul className="products_items">
            {products.map((product) => (
              <NavLink
                key={product.code_product}
                to={`/produit/${product.slug}`}
              >
                {product.name} <button type="button">+</button>
              </NavLink>
            ))}
          </ul>
        </div>
      </Page>
    </div>
  );
}

export default Products;
