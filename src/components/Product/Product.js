import { useDispatch, useSelector } from 'react-redux';
import { AnimatePresence, motion } from 'framer-motion';
import './product.scss';
import { useNavigate, useParams } from 'react-router';
import { useEffect, useState } from 'react';
import background from 'src/components/Product/fenouils.jpg';
import { pushInCart, setCount } from '../../feature/shoppingCart.slice';
import { changeQuantityProduct, navigationInProduct } from '../../utils/cartUtils';
import Page from '../Page/Page';
import Loading from '../Loading/Loading';

function Product() {
  const params = useParams();
  const { slugProduct, slugCart } = params;
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isLoadingProducts = useSelector((state) => state.products.loadingProducts);
  const isLoadingCategories = useSelector((state) => state.products.loadingCategories);
  const isLoadingCarts = useSelector((state) => state.products.loadingCarts);
  //
  // select product or cart
  //
  const products = useSelector((state) => state.products.products.data);
  const carts = useSelector((state) => state.products.carts.data);
  let oneProduct;
  if (slugProduct) {
    oneProduct = products.find((element) => element.slug === slugProduct);
  }
  if (slugCart) {
    oneProduct = carts.find((element) => element.slug === slugCart);
  }
  let productsListInCart;
  if (carts.some((element) => element.slug === slugCart)) {
    productsListInCart = oneProduct.cartProducts;
  }
  //
  // add product in cart
  //
  const cart = useSelector((state) => state.shoppingCart.shoppingCart);
  const handleClickCart = () => {
    dispatch(pushInCart(changeQuantityProduct(cart, oneProduct, 1)));
    dispatch(setCount(1));
  };
  //
  // navigate in product
  //
  const [isForward, setIsForward] = useState(false);
  useEffect(() => () => {
    setIsForward(false);
  }, []);
  const handleNavigateForward = () => {
    setIsForward(true);
    navigate(`${slugProduct ? '/produit/' : '/paniers/'}${navigationInProduct(slugProduct ? products : carts, oneProduct, 1)}`);
  };
  const handleNavigateBackward = () => {
    setIsForward(false);
    navigate(`${slugProduct ? '/produit/' : '/paniers/'}${navigationInProduct(slugProduct ? products : carts, oneProduct, -1)}`);
  };
  //
  const getQuantityInCart = () => {
    const productInCart = cart.find((product) => product.name === oneProduct.name);
    if (!productInCart) {
      return 0;
    }
    return productInCart.quantity;
  };
  const quantityInCart = getQuantityInCart();
  const variants = {
    enter: () => ({
      x: isForward ? 1000 : -1000,
      opacity: 0.5,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: () => ({
      zIndex: 0,
      x: isForward ? -1000 : 1000,
      opacity: 0,
    }),
  };

  if ((isLoadingProducts
    || isLoadingCategories
    || isLoadingCarts
    || Object.keys(params).length === 0
  )) {
    return (
      <Page>
        <Loading />
      </Page>
    );
  }
  return (
    <AnimatePresence>
      <div
        className="container"
      >
        <motion.div
          className="product"
          key={oneProduct.name}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: 'spring', stiffness: 300, damping: 30 },
            opacity: { duration: 0.6 },
          }}
        >
          <motion.h2
            className="product-title"
            initial={{ y: 900 }}
            animate={{ y: 0 }}
            exit={{ y: -300, opacity: 0, transition: { duration: 0.9 } }}
          >
            {oneProduct.name}
          </motion.h2>
          <img src={background} alt="product" className="product-image" />
          <div className="product-content">
            {slugCart && (
            <div className="productsListinCart">
              {productsListInCart.map((product) => (
                <div
                  className="productInCart"
                  key={product.product.name}
                >
                  <div className="product-name">
                    {product.product.name}
                  </div>
                  <div className="doted" />
                  <div className="meta">
                    {`${(product.product.unity === 'kg' ? parseInt(product.quantity, 10) : product.quantity)}${product.product.unity}`}
                  </div>
                </div>
              ))}

            </div>
            )}
            {(products.some((element) => element.slug === slugProduct)) && (
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Magni, esse. Vero aut modi ut. Eveniet eius in voluptatem esse nulla!
            </p>
            )}

          </div>
          <div className="product-info">
            <div className="product-meta">
              <span className="product-meta-span span-one">
                <span className="span-one-title">Quantité</span>
                <div className="container-meta">
                  <span className="span-one-info">{oneProduct.quantity}</span>
                  <span className="span-one-info">{oneProduct.unity}</span>
                </div>
              </span>

              <span className="product-meta-span span-two">
                <span className="span-two-title">Prix</span>
                <div className="container-meta">
                  <span className="span-two-info">{`${oneProduct.price}€`}</span>
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
          <div
            className="product-navigation-cart"
            onClick={handleClickCart}
          >
            <ion-icon name="cart-outline" style={{ fontSize: '30px', padding: '3px' }} />
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
    </AnimatePresence>
  );
}

export default Product;
