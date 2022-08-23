/* eslint-disable no-nested-ternary */
/* eslint-disable max-len */
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
  //
  // pickup data
  //
  const products = useSelector((state) => state.products.products.data);
  const categories = useSelector((state) => state.products.categories.data);
  //
  // booleen for conditional loading display
  //
  const isLoadingProducts = useSelector((state) => state.products.loadingProducts);
  const isLoadingCategories = useSelector((state) => state.products.loadingCategories);
  //
  // algorithm to filter products by category
  //
  const navigate = useNavigate();
  const handleClickProduct = (slug) => navigate(`/produit/${slug}`);
  const params = useParams();
  const { slug } = params;
  const filterProducts = () => products.filter((product) => (product.category.slug === slug));
  const filteredArrayByCategory = Object.keys(params).length === 0 ? products : filterProducts();
  //
  // algorithm to filter products by search bar
  //
  const [searchTerm, setSearchTerm] = useState('');
  const handleChange = (item) => (setSearchTerm(item));
  const arrayToDisplay = filteredArrayByCategory
    .filter((value) => (!searchTerm ? value : value.name.toLowerCase().includes(searchTerm.toLowerCase())));
  const [isSearchBar, setIsSearchBar] = useState(false);
  const setHiddenSearchBar = !isSearchBar ? 'hidden' : '';
  const handleClick = () => {
    setIsSearchBar(!isSearchBar);
  };
  const handleBlur = () => setIsSearchBar(!isSearchBar);
  if ((isLoadingProducts || isLoadingCategories)) {
    return (
      <Page>
        <Loading />
      </Page>
    );
  }
  return (
    <Page>
      <header className="products-header">
        <div className="products-searchBar">
          <SearchBar
            type="text"
            placeholder="Rechercher..."
            className={`products-searchBar-input ${setHiddenSearchBar}`}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          <ion-icon
            name="search-outline"
            onClick={handleClick}
          />
        </div>
        <div className="products-categories">
          {categories.map((category) => (
            <NavLink
              key={category.id}
              className="products-categoryName"
              to={`/categorie/${category.slug}`}
            >
              {category.name === 'Produits transformés' ? 'Épicerie' : category.name}
            </NavLink>
          ))}
        </div>
      </header>
      <div className="products">
        <ul className="products-items">
          {arrayToDisplay.map((product) => (
            <Card
              related="products"
              key={product.name}
              onClick={handleClickProduct}
              name={product.name}
              image={product.image}
              price={product.price}
              unity={product.unity}
              quantity={product.quantity}
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
