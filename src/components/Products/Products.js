import './products.scss';
import SideBar from 'src/components/SideBar/SideBar';
import Page from '../Page/Page';

function Products() {
  return (
    <div>
      <Page>
        <SideBar />
        <div>Products</div>
      </Page>
    </div>
  );
}

export default Products;
