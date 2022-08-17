import './products.scss';
import { useSelector } from 'react-redux';
import SearchBar from 'src/components/SearchBar/SearchBar';
import { useNavigate, useParams } from 'react-router';
import Card from 'src/components/Card/Card';
import { NavLink } from 'react-router-dom';
import { useEffect } from 'react';
import Page from '../Page/Page';

function Products() {
  const products = useSelector((state) => state.products.products);
  const ploplo = [...products];
  const categories = useSelector((state) => state.products.categories);
  const navigate = useNavigate();
  const handleClickProduct = (slug) => navigate(`/produit/${slug}`);
  const params = useParams();
  console.log(params);
  let arrayToDisplay;
  const productsToDisplay = () => {
    if (params === {}) {
      arrayToDisplay = ploplo;
      return arrayToDisplay;
    }
    arrayToDisplay = ploplo.filter((product) => (product.category.slug === params));
    return arrayToDisplay;
  };
  useEffect(() => {
    productsToDisplay();
  }, []);
  console.log(arrayToDisplay);
  return (
    <div className="products">
      <Page>
        {categories.map((category) => <NavLink key={category.id} className="categoryName" to={`/categorie/${category.slug}`}>{category.name}</NavLink>)}
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
  );
}

export default Products;
