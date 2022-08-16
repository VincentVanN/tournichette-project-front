// import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import './product.scss';

function Product(name, image, price, unity, stock) {
  // const oneProduct = useSelector((state) => state.products.products).filter((element) => element === slug );

  const navigate = useNavigate();
  const handleClickCart = () => navigate('/panier');
  return (
    <div className="product">
      <article className="card_article">
        product
      </article>
      <button
        type="button"
        onClick={handleClickCart}
      >
        Mettre dans mon panier
      </button>
    </div>
  );
}

export default Product;
