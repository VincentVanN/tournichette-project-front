import { useNavigate } from 'react-router';
import logo from 'src/assets/logo.svg';
import './home.scss';
import Page from '../Page/Page';

function Home() {
  const navigate = useNavigate();
  const handleClickProducts = () => navigate('/produits');
  return (
    <Page>
      <div className="home">
        <img className="home-logo" src={logo} alt="logo Tournichette" />
        <h1 className="home-annoncement">
          Les ventes sont ouvertes
        </h1>
        <button
          className="home-button"
          type="button"
          onClick={handleClickProducts}
        >
          <ion-icon name="arrow-forward-circle-outline" style={{ color: '#f8734a', fontSize: '70px', marginBottom: '100px' }} />
        </button>
      </div>
    </Page>
  );
}

export default Home;
