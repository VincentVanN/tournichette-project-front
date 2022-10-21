import { useDispatch, useSelector } from 'react-redux';
import { motion } from 'framer-motion';
import './product.scss';
import { useLocation, useNavigate, useParams } from 'react-router';
import { useEffect, useState } from 'react';
import { pushInCart, setCount } from '../../feature/shoppingCart.slice';
import { changeQuantityProduct, navigationInProduct } from '../../utils/cartUtils';
import Page from '../Page/Page';
import Loading from '../Loading/Loading';

function Product() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { slugProduct, slugCart, slugCategory } = useParams();
  const { product, arrayToDisplay, type } = useLocation().state.currentProduct;
  const isLoadingProducts = useSelector((state) => state.products.loadingProducts);
  const isLoadingCategories = useSelector((state) => state.products.loadingCategories);
  const isLoadingCarts = useSelector((state) => state.products.loadingCarts);
  const width = useSelector((state) => state.navigation.width);
  //
  // add product in cart
  //
  const cart = useSelector((state) => state.shoppingCart.shoppingCart);
  const handleClickCart = () => {
    dispatch(pushInCart(changeQuantityProduct(cart, product, 1)));
    dispatch(setCount(1));
  };
  //
  // navigate in product
  //
  const [isForward, setIsForward] = useState(false);
  useEffect(() => () => {
    setIsForward(false);
  }, []);
  const selectRoute = () => {
    if (slugProduct && slugCategory) {
      return `/categorie/${slugCategory}/`;
    }
    if (slugCart) {
      return '/paniers/';
    }
    return '/produit/';
  };
  const productToDisplay = (increment) => {
    const object = {
      product: navigationInProduct(arrayToDisplay, product, increment),
      arrayToDisplay,
      type,
    };
    return object;
  };
  const handleNavigateForward = () => {
    setIsForward(true);
    navigate(`${selectRoute()}${navigationInProduct(arrayToDisplay, product, 1).slug}`, { state: { currentProduct: productToDisplay(1) } });
  };
  const handleNavigateBackward = () => {
    setIsForward(false);
    navigate(`${selectRoute()}${navigationInProduct(arrayToDisplay, product, -1).slug}`, { state: { currentProduct: productToDisplay(-1) } });
  };
  //
  const getQuantityInCart = () => {
    const productInCart = cart.find((wantedProduct) => wantedProduct.name === product.name);
    if (!productInCart) {
      return 0;
    }
    return productInCart.quantity;
  };
  const widthForAnimationFunction = () => {
    if (width <= 577) {
      return '90%';
    }
    return '80%';
  };
  const widthForAnimation = widthForAnimationFunction();
  const quantityInCart = getQuantityInCart();
  if (isLoadingProducts
    || isLoadingCategories
    || isLoadingCarts) {
    return (
      <Page>
        <Loading />
      </Page>
    );
  }
  return (
    <div
      className="container"
    >
      <motion.div
        className="product"
        key={product.name}
        initial={{ width: 0 }}
        animate={{ width: `${widthForAnimation}` }}
        exit={{ x: isForward ? `-${widthForAnimation}` : `${widthForAnimation}`, opacity: 0, transition: { duration: 0.20 } }}
      >
        <motion.h2
          className="product-title"
          initial={{ y: -900 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.4 }}
          exit={{ y: -300, opacity: 0, transition: { duration: 0.2 } }}
          style={{ color: '#fd7c55' }}
        >
          {product.name}
        </motion.h2>
        {!slugCart && (
          <img src={product.image} alt="product" className="product-image" />
        )}
        <div className="product-content">
          {slugCart && (
            <div className="productsListinCart">
              {product.cartProducts.map((productInCart) => (
                <div
                  className="productInCart"
                  key={productInCart.product.name}
                >
                  <div className="product-name">
                    {productInCart.product.name}
                  </div>
                  <div className="doted" />
                  <div className="meta">
                    {`${(productInCart.product.unity === 'kg' ? parseInt(productInCart.quantity, 10) : productInCart.quantity)}${productInCart.product.unity}`}
                  </div>
                </div>
              ))}

            </div>
          )}
          { (type === 'products' || 'category') && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
            >
              {product.description}
            </motion.p>
          )}
        </div>
        <div className="product-info">
          <div className="product-meta">
            <span className="product-meta-span span-one">
              <span className="span-one-title">Quantité</span>
              <div className="container-meta">
                <span className="span-one-info">{product.quantity}</span>
                <span className="span-one-info">{product.unity}</span>
              </div>
            </span>
            <span className="product-meta-span span-two">
              <span className="span-two-title">Prix</span>
              <div className="container-meta">
                <span className="span-two-info">{`${product.price}€`}</span>
              </div>
            </span>
            <span className="product-meta-span span-three">
              <span className="span-three-title">Panier</span>
              <div className="container-meta">
                <motion.span
                  className="span-three-info"
                  key={quantityInCart}
                  initial={{
                    scale: 0,
                  }}
                  animate={{
                    scale: 1,
                    transition: {
                      duration: 0.1, type: 'spring', damping: 12, stiffness: 500,
                    },
                  }}
                  exit={{
                    scale: 0,
                  }}
                >{quantityInCart}
                </motion.span>
              </div>
            </span>
          </div>
        </div>
        <div className="product-navigation">
          <div className="product-navigation-buttons">
            <div
              className="product-navigation-backward"
              onClick={handleNavigateBackward}
            >
              <ion-icon name="arrow-back-circle-outline" />
              <p>Précédent</p>
            </div>
            <div
              className="product-navigation-cart"
              onClick={handleClickCart}
            >
              <ion-icon name="cart-outline" style={{ fontSize: '30px', padding: '3px' }} />
            </div>
            <div
              className="product-navigation-forward"
              onClick={handleNavigateForward}
            >
              <p>suivant</p>
              <ion-icon name="arrow-forward-circle-outline" />
            </div>
          </div>

        </div>
      </motion.div>
    </div>
  );
}

export default Product;
