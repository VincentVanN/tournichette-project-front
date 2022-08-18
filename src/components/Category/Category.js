import Products from '../Products/Products';
import './category.scss';

function Category() {
  return (
    <div className="container">
      <article className="product">
        <Products />
      </article>
    </div>
  );
}

export default Category;
