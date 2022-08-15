import { useSelector } from 'react-redux';
import './product.scss';

function Product() {
  const oneProduct = useSelector((state) => state.products.products).filter((element) => element.code_product);
  console.log(oneProduct);
  return (
    <div className="product">
      <div className="product-item">
        product
      </div>
    </div>
  );
}

export default Product;
