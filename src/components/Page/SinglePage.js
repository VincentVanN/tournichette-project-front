import { useSelector } from 'react-redux';
import { useLocation } from 'react-router';
import ChoiseDepotPoints from '../ChoiseDepotPoints/ChoiseDepotPoints';
import Loading from '../Loading/Loading';
import ProductRendering from '../Product/ProductRendering';
import ProductsRendering from '../Products/ProductsRendering';
import ShoppingCartRendering from '../ShoppingCart/ShoppingCartRendering';
import StaticProductsDisplay from '../StaticProductsDisplay/StaticProductsDisplay';
import OrdersRendering from '../User/OrdersRendering';
import UserContactRendering from '../User/UserContactRendering';
import LargeComponent from './LargeComponent';
import Page from './Page';
import './singlePage.scss';
import SmallComponent from './SmallComponent';

function SinglePage() {
  const location = useLocation();
  const isLoadingProducts = useSelector((state) => state.products.loadingProducts);
  const isLoadingCategories = useSelector((state) => state.products.loadingCategories);
  const isLoadingCarts = useSelector((state) => state.products.loadingCarts);
  console.log(location);
  if ((isLoadingProducts || isLoadingCategories || isLoadingCarts)) {
    return (
      <Page>
        <Loading />
      </Page>
    );
  }
  if (location.pathname === '/liste') {
    return (
      <Page>
        <div className="singlePage-container">
          <SmallComponent className="smallComponent">
            <ProductsRendering related="products" />
          </SmallComponent>
          <LargeComponent className="largeComponent">
            <StaticProductsDisplay />
          </LargeComponent>
        </div>
      </Page>
    );
  }
  if (location.pathname.includes('/categorie')) {
    return (
      <Page>
        <div className="singlePage-container">
          <SmallComponent className="smallComponent">
            <ProductsRendering related="products" />
          </SmallComponent>
          <LargeComponent className="largeComponent">
            <StaticProductsDisplay />
          </LargeComponent>
        </div>
      </Page>
    );
  }
  if (location.pathname === '/profil') {
    return (
      <Page>
        <div className="singlePage-container">
          <SmallComponent className="smallComponent">
            <UserContactRendering />
          </SmallComponent>
          <LargeComponent className="largeComponent">
            <OrdersRendering />
          </LargeComponent>
        </div>
      </Page>
    );
  }
  if (location.pathname === '/panier') {
    return (
      <Page>
        <div className="singlePage-container">
          <SmallComponent className="smallComponent">
            <ChoiseDepotPoints />
          </SmallComponent>
          <LargeComponent className="largeComponent">
            <ShoppingCartRendering />
          </LargeComponent>
        </div>
      </Page>
    );
  }
  if (location.pathname.includes('/produit')) {
    return (
      <Page>
        <div className="singlePage-container">
          <SmallComponent className="smallComponent">
            <ProductsRendering related="products" />
          </SmallComponent>
          <LargeComponent className="largeComponent">
            <ProductRendering />
          </LargeComponent>
        </div>
      </Page>
    );
  }
}

export default SinglePage;
