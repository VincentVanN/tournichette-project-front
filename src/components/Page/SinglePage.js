import { useSelector } from 'react-redux';
import { useLocation, useParams } from 'react-router';
import ChoiseDepotPoints from '../ChoiseDepotPoints/ChoiseDepotPoints';
import Loading from '../Loading/Loading';
import ProductRendering from '../Product/ProductRendering';
import ProductsRendering from '../Products/ProductsRendering';
import ShoppingCartEmpty from '../ShoppingCart/ShoppingCartEmpty';
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
  const cartToDisplay = useSelector((state) => state.shoppingCart.shoppingCart);
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
            <StaticProductsDisplay related="detail" />
          </LargeComponent>
        </div>
      </Page>
    );
  }
  if (location.pathname === '/listePaniers') {
    return (
      <Page>
        <div className="singlePage-container">
          <SmallComponent className="smallComponent">
            <ProductsRendering related="carts" />
          </SmallComponent>
          <LargeComponent className="largeComponent">
            <StaticProductsDisplay related="panier" />
          </LargeComponent>
        </div>
      </Page>
    );
  }
  if (location.pathname.includes('/categorie')) {
    const { slug } = useParams();
    return (
      <Page>
        <div className="singlePage-container">
          <SmallComponent className="smallComponent">
            <ProductsRendering related="products" />
          </SmallComponent>
          <LargeComponent className="largeComponent">
            <StaticProductsDisplay related={slug} />
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
  if (location.pathname === '/panier' && cartToDisplay.length !== 0) {
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
  if (location.pathname === '/panier' && cartToDisplay.length === 0) {
    return (
      <Page>
        <ShoppingCartEmpty />
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
  if (location.pathname.includes('/produit/paniers')) {
    return (
      <Page>
        <div className="singlePage-container">
          <SmallComponent className="smallComponent">
            <ProductsRendering related="carts" />
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
