import { useNavigate, useParams } from 'react-router';
import { useSelector } from 'react-redux';
import './product.scss';
import Page from 'src/components/Page/Page';

function Product() {
  const { slug } = useParams();
  const products = useSelector((state) => state.products.products.data);
  const oneProduct = products.find((element) => element.slug === slug);

  const navigate = useNavigate();
  const handleClickCart = () => navigate('/panier');
  return (
    <Page>
      <div className="container">
        <div className="product">
          <article className="product-article">
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
          </button>
        </div>
      </div>
    </Page>
  );
}

export default Product;
