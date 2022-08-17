import { useSelector } from 'react-redux';
import { useParams } from 'react-router';
import './category.scss';

function Category() {
  const categories = useSelector((state) => state.products.products);
  console.log(categories);

  const { slug } = useParams();

  const filterCategory = () => {
    const result = categories.category.filter(slug);
    console.log(result);
  };

  return (
    <div className="category">
      <button type="button" className="category_button" onClick={() => filterCategory('fruits')}>Fruits</button>
      <button type="button" className="category_button" onClick={() => filterCategory('legumes')}>Légumes</button>
      <button type="button" className="category_button" onClick={() => filterCategory('produits-transformes')}>Produits Transformés</button>
    </div>
  );
}

export default Category;
