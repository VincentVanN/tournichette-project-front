import { useDispatch, useSelector } from 'react-redux';
import './product.scss';
import Page from 'src/components/Page/Page';
import background from 'src/components/Product/fenouils.jpg';
import { useNavigate, useParams } from 'react-router';
import { pushInCart, setCount } from '../../feature/shoppingCart.slice';
import { changeQuantityProduct, navigationInProduct } from '../../utils/cartUtils';

function Product() {
  const dispatch = useDispatch();
  const { slug } = useParams();
  const navigate = useNavigate();
  //
  // select product
  const products = useSelector((state) => state.products.products.data);
  const oneProduct = products.find((element) => element.slug === slug);
  //
  //
  // add product in cart
  const cart = useSelector((state) => state.shoppingCart.shoppingCart);
  const handleClickCart = () => {
    dispatch(pushInCart(changeQuantityProduct(cart, oneProduct, 1)));
    dispatch(setCount(1));
  };
  //
  // navigate in product
  const handleNavigateForward = () => navigate(`/produit/${navigationInProduct(products, oneProduct, 1)}`);
  const handleNavigateBackward = () => navigate(`/produit/${navigationInProduct(products, oneProduct, -1)}`);
  return (
    <Page>
      <div className="container">
        <h2 className="product-title">
          <p>
            {oneProduct.name}
          </p>
        </h2>
        <div className="product">
          <img src={background} alt="product" className="product-image" />
          <div className="product-content">
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Magni, esse. Vero aut modi ut. Eveniet eius in voluptatem esse nulla!
            </p>
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
                  <span className="span-three-info">0</span>
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
    </Page>
  );
}

export default Product;
