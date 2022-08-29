/* eslint-disable react/jsx-indent */
/* eslint-disable react/require-default-props */
/* eslint-disable no-nested-ternary */
/* eslint-disable max-len */
import './products.scss';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { useLocation, useNavigate, useParams } from 'react-router';
import Card from 'src/components/Card/Card';
import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import Page from '../Page/Page';
import Loading from '../Loading/Loading';
import SearchBar from '../SearchBar/SearchBar';

function Products({ related }) {
  //
  // pickup data
  //
  const products = useSelector((state) => state.products.products.data);
  const categories = useSelector((state) => state.products.categories.data);
  const carts = useSelector((state) => state.products.carts.data);
  //
  // booleen for conditional loading display
  //
  const isLoadingProducts = useSelector((state) => state.products.loadingProducts);
  const isLoadingCategories = useSelector((state) => state.products.loadingCategories);
  const isLoadingCarts = useSelector((state) => state.products.loadingCarts);
  //
  // algorithm to filter products by category
  //
  const navigate = useNavigate();
  // check location for dual display when screen > 1280px
  const location = useLocation();
  const handleClickProduct = (relatedCard, slug) => navigate(`${(relatedCard === 'carts') || (location.pathname.includes('/produit/paniers')) ? '/produit/paniers/' : '/produit/'}${slug}`);
  const params = useParams();
  const { slug } = params;
  const filterProducts = () => products.filter((product) => (product.category.slug === slug));
  const filteredArrayByCategory = (Object.keys(params).length === 0 || location !== '/liste') ? products : filterProducts();
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
  if ((isLoadingProducts || isLoadingCategories || isLoadingCarts)) {
    return (
      <Page>
        <Loading />
      </Page>
    );
  }
  return (
      <div className="products-container">
         <header className="products-header">
        {related === 'carts' && (<h1 className="title"> Nos paniers de saison</h1>)}
        {(((related === 'products' || slug)) && (!location.pathname.includes('/produit/paniers')) && (
          <><div className="products-searchBar">
            <SearchBar
              type="text"
              placeholder="Rechercher..."
              className={`products-searchBar-input ${setHiddenSearchBar}`}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <ion-icon
              className="products-searchBar-icon"
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
          </>
        ))}
         </header>

      <div className="products">
        <ul className="products-items">
          {((related === 'products' || slug) && (!location.pathname.includes('/produit/paniers')) ? arrayToDisplay : carts).map((product) => (
            <Card
              related={related === 'products' ? 'products' : 'carts'}
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
      </div>
  );
}
Products.propTypes = {
  related: PropTypes.string,
};
export default Products;
