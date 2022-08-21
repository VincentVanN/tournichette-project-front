import { useSelector } from 'react-redux';
import './product.scss';
import Page from 'src/components/Page/Page';
import background from 'src/components/Product/fenouils.jpg';
import { useParams } from 'react-router';

function Product() {
  const { slug } = useParams();
  const products = useSelector((state) => state.products.products.data);
  const oneProduct = products.find((element) => element.slug === slug);
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
            <div className="product-navigation-backward"></div>
            <div className="product-navigation-forward"></div>
          </div>
          {/* <article className="product-article">
            <h2 className="product-title">{oneProduct.name}</h2>
            <ul className="product-infos">
              <li>{oneProduct.quantity}</li>
              <li>{oneProduct.unity}</li>
              <li>{oneProduct.price}</li>
            </ul>

          </article>
          <button
            type="button"
            onClick={handleClickCart}
            className="product_button"
          >
            Mettre dans mon panier
          </button> */}
        </div>
      </div>
    </Page>
  );
}

export default Product;
