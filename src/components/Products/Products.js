import './products.scss';
import { useSelector } from 'react-redux';
import SearchBar from 'src/components/SearchBar/SearchBar';
import { useNavigate, useParams } from 'react-router';
import Card from 'src/components/Card/Card';
import { NavLink } from 'react-router-dom';
import Page from '../Page/Page';
import Loading from '../Loading/Loading';

function Products() {
  const products = useSelector((state) => state.products.products.data);
  const categories = useSelector((state) => state.products.categories.data);
  const isLoadingProducts = useSelector((state) => state.products.loadingProducts);
  const isLoadingCategories = useSelector((state) => state.products.loadingCategories);
  const navigate = useNavigate();
  const handleClickProduct = (slug) => navigate(`/produit/${slug}`);
  const params = useParams();
  const { slug } = params;
  const filterProducts = () => products.filter((product) => (product.category.slug === slug));
  const arrayToDisplay = Object.keys(params).length === 0 ? products : filterProducts();
  if ((isLoadingProducts || isLoadingCategories)) {
    return (
      <Page>
        <Loading />
      </Page>
    );
  }
  return (
    <Page>
      <div className="products">
        {categories.map((category) => <NavLink key={category.id} className="categoryName" to={`/categorie/${category.slug}`}>{category.name}</NavLink>)}
        <h1>Liste des produits</h1>
        <SearchBar />
        <ul className="products_items">
          {arrayToDisplay.map((product) => (
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
      </div>
    </Page>
  );
}

export default Products;
