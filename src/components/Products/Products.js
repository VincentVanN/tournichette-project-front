/* eslint-disable max-len */
/* eslint-disable consistent-return */
import './products.scss';
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router';
import Card from 'src/components/Card/Card';
import { NavLink } from 'react-router-dom';
import { useState } from 'react';

import Page from '../Page/Page';
import Loading from '../Loading/Loading';
import SearchBar from '../SearchBar/SearchBar';

function Products() {
  /// /////////////////////////////////
  // term state for searchBar
  const [searchTerm, setSearchTerm] = useState('');
  const products = useSelector((state) => state.products.products.data);
  const categories = useSelector((state) => state.products.categories.data);
  // booleen for conditional loading display
  const isLoadingProducts = useSelector((state) => state.products.loadingProducts);
  const isLoadingCategories = useSelector((state) => state.products.loadingCategories);
  // algorithm to filter products by category
  const navigate = useNavigate();
  const handleClickProduct = (slug) => navigate(`/produit/${slug}`);
  const params = useParams();
  const { slug } = params;
  const filterProducts = () => products.filter((product) => (product.category.slug === slug));
  // algorithm to filter products by search bar
  const filteredArrayByCategory = Object.keys(params).length === 0 ? products : filterProducts();
  const handleChange = (item) => (setSearchTerm(item));
  const arrayToDisplay = filteredArrayByCategory
    .filter((value) => (!searchTerm ? value : value.name.toLowerCase().includes(searchTerm.toLowerCase())));

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
        <div className="searchbar">
          <SearchBar
            type="text"
            placeholder="Rechercher..."
            className="searchbar_input"
            onChange={handleChange}
          />
        </div>
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
