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
import Page from './Page';
import './singlePage.scss';

function SinglePage() {
  const location = useLocation();
  const { slugCategory, slugProduct } = useParams();
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
          <div className="smallComponent">
            <ProductsRendering />
          </div>
          <div className="largeComponent">
            <StaticProductsDisplay related="detail" />
          </div>
        </div>
      </Page>
    );
  }
  if (location.pathname === '/NosPaniers') {
    return (
      <Page>
        <div className="singlePage-container">
          <div className="smallComponent">
            <ProductsRendering />
          </div>
          <div className="largeComponent">
            <StaticProductsDisplay related="panier" />
          </div>
        </div>
      </Page>
    );
  }
  if (location.pathname.includes('/categorie') && !slugProduct) {
    return (
      <Page>
        <div className="singlePage-container">
          <div className="smallComponent">
            <ProductsRendering />
          </div>
          <div className="largeComponent">
            <StaticProductsDisplay related={slugCategory} />
          </div>
        </div>
      </Page>
    );
  }
  if (location.pathname.includes('/categorie') && slugProduct) {
    return (
      <Page>
        <div className="singlePage-container">
          <div className="smallComponent">
            <ProductsRendering />
          </div>
          <div className="largeComponent">
            <ProductRendering />
          </div>
        </div>
      </Page>
    );
  }
  if (location.pathname === '/profil') {
    return (
      <Page>
        <div className="singlePage-container">
          <div className="smallComponent">
            <UserContactRendering />
          </div>
          <div className="largeComponent">
            <OrdersRendering />
          </div>
        </div>
      </Page>
    );
  }
  if (location.pathname === '/MesAchats' && cartToDisplay.length !== 0) {
    return (
      <Page>
        <div className="singlePage-container">
          <div className="smallComponent">
            <ChoiseDepotPoints />
          </div>
          <div className="largeComponent">
            <ShoppingCartRendering />
          </div>
        </div>
      </Page>
    );
  }
  if (location.pathname === '/MesAchats' && cartToDisplay.length === 0) {
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
          <div className="smallComponent">
            <ProductsRendering />
          </div>
          <div className="largeComponent">
            <ProductRendering />
          </div>
        </div>
      </Page>
    );
  }
  if (location.pathname.includes('/paniers')) {
    return (
      <Page>
        <div className="singlePage-container">
          <div className="smallComponent">
            <ProductsRendering />
          </div>
          <div className="largeComponent">
            <ProductRendering />
          </div>
        </div>
      </Page>
    );
  }
}

export default SinglePage;
