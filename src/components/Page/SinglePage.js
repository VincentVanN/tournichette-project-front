import Products from '../Products/Products';
import StaticProductsDisplay from '../StaticProductsDisplay/StaticProductsDisplay';
import LargeComponent from './LargeComponent';
import Page from './Page';
import './singlePage.scss';
import SmallComponent from './SmallComponent';

function SinglePage() {
  return (
    <Page>
      <div className="singlePage-container">
        <SmallComponent className="smallComponent">
          <Products related="products" />
        </SmallComponent>
        <LargeComponent className="largeComponent">
          <StaticProductsDisplay />
        </LargeComponent>

      </div>
    </Page>
  );
}

export default SinglePage;
