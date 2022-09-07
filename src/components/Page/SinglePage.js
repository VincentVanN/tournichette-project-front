import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useParams } from 'react-router-dom';
import { setParamsLoading } from '../../feature/navigation.slice';
import CartWithCount from '../CartWithCount/CartWithCount';
import ChoiseDepotPoints from '../ChoiseDepotPoints/ChoiseDepotPoints';
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
  const dispatch = useDispatch();
  const params = useParams();
  const { slugProduct } = params;
  const cartToDisplay = useSelector((state) => state.shoppingCart.shoppingCart);
  const count = useSelector((state) => state.shoppingCart.count);
  const paramsLoading = useSelector((state) => state.navigation.paramsLoading);
  useEffect(() => {
    dispatch(setParamsLoading(false));
    return () => {
      dispatch(setParamsLoading(true));
    };
  }, [params]);
  if (location.pathname === '/liste') {
    return (
      <Page>
        <div className="singlePage-container">
          <div className="smallComponent">
            <ProductsRendering />
          </div>
          <div className="largeComponent">
            <StaticProductsDisplay />
          </div>
          {count !== 0 && <CartWithCount />}
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
            <StaticProductsDisplay />
          </div>
          {count !== 0 && <CartWithCount />}
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
            <StaticProductsDisplay />
          </div>
          {count !== 0 && <CartWithCount />}
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
            {!paramsLoading && <ProductRendering />}
          </div>
          {count !== 0 && <CartWithCount />}
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
            { !paramsLoading && <ProductRendering />}
          </div>
          {count !== 0 && <CartWithCount />}
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
          {count !== 0 && <CartWithCount />}
        </div>
      </Page>
    );
  }
}

export default SinglePage;
