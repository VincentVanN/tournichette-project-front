// import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router';
import { useSelector } from 'react-redux';
import './product.scss';
import Page from 'src/components/Page/Page';

function Product() {
  const { slug } = useParams();
  const products = useSelector((state) => state.products.products);
  const oneProduct = products.find((element) => element.slug === slug);

  const navigate = useNavigate();
  const handleClickCart = () => navigate('/panier');
  return (
    <Page>
      <div className="container">
        <div className="product">
          <article className="product_article">
            <h2 className="product-title">{oneProduct.name}</h2>
            <img className="product-img" src={oneProduct.image} alt={oneProduct.name} />
            <ul className="product-infos">
              <li>{oneProduct.price}</li>
              <li>{oneProduct.unity}</li>
              <li>{oneProduct.stock}</li>
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
