import { useDispatch, useSelector } from 'react-redux';
import './product.scss';
import background from 'src/components/Product/fenouils.jpg';
import { useNavigate, useParams } from 'react-router';
import { pushInCart, setCount } from '../../feature/shoppingCart.slice';
import { changeQuantityProduct, navigationInProduct } from '../../utils/cartUtils';

function Product() {
  const dispatch = useDispatch();
  const { slug } = useParams();
  const navigate = useNavigate();
  //
  // select product or cart
  //
  const products = useSelector((state) => state.products.products.data);
  const carts = useSelector((state) => state.products.carts.data);
  let oneProduct;
  if (products.some((element) => element.slug === slug)) {
    oneProduct = products.find((element) => element.slug === slug);
  }
  if (carts.some((element) => element.slug === slug)) {
    oneProduct = carts.find((element) => element.slug === slug);
  }
  let productsListInCart;
  if (carts.some((element) => element.slug === slug)) {
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
  const handleNavigateForward = () => navigate(`/produit/${navigationInProduct((products.some((element) => element.slug === slug)) ? products : carts, oneProduct, 1)}`);
  const handleNavigateBackward = () => navigate(`/produit/${navigationInProduct((products.some((element) => element.slug === slug)) ? products : carts, oneProduct, -1)}`);
  //
  const getQuantityInCart = () => {
    const productInCart = cart.find((product) => product.name === oneProduct.name);
    if (!productInCart) {
      return 0;
    }
    return productInCart.quantity;
  };
  const quantityInCart = getQuantityInCart();
  return (
    <div className="container">
      <h2 className="product-title">
        {oneProduct.name}
      </h2>
      <div className="product">
        <img src={background} alt="product" className="product-image" />
        <div className="product-content">
          {(carts.some((element) => element.slug === slug)) && (
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
          {(products.some((element) => element.slug === slug)) && (
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
                <span className="span-three-info">{quantityInCart}</span>
              </div>
            </span>
          </div>
        </div>
        <div className="product-navigation">
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
          <div
            className="product-navigation-cart"
            onClick={handleClickCart}
          >
            <ion-icon name="cart-outline" style={{ fontSize: '30px', padding: '3px' }} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;
