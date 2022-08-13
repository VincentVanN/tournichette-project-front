import SideBar from 'src/components/SideBar/SideBar';
import Page from '../Page/Page';
import './home.scss';

function Home() {
  return (
    <div>
      <Page>
        <SideBar />
        <div>
          HOME
        </div>
      </Page>
    </div>
  );
}

export default Home;
