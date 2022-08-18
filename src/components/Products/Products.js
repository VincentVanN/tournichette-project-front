import './products.scss';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import SearchBar from 'src/components/SearchBar/SearchBar';
import { useNavigate } from 'react-router';
import Card from 'src/components/Card/Card';
import Page from '../Page/Page';

function Products() {
  const products = useSelector((state) => state.products.products);
  const navigate = useNavigate();
  const handleClickProduct = (slug) => navigate(`/produit/${slug}`);

  return (
    <div className="container">
      <div className="products">
        <Page>
          <nav className="productsNav">
            <NavLink to="/categorie /{slug}">Fruits</NavLink>
            <NavLink to="/categorie /{slug}">Légumes</NavLink>
            <NavLink to="/categorie /{slug}">Produits Transformés</NavLink>
          </nav>
          <h1>Liste des produits</h1>
          <SearchBar />
          <ul className="products_items">
            {products.map((product) => (
              <Card
                key={product.name}
                onClick={handleClickProduct}
                name={product.name}
                image={product.image}
                price={product.price}
                unity={product.unity}
                stock={product.stock}
                slug={product.slug}
                product={product}
                id={product.id}
              />
            ))}
          </ul>
        </Page>
      </div>
    </div>
  );
}

export default Products;
