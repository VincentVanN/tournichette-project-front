import { useNavigate } from 'react-router';
import logo from 'src/assets/logo.svg';
import './home.scss';
import Page from '../Page/Page';

function Home() {
  const navigate = useNavigate();
  const handleClickProducts = () => navigate('/liste');
  const handleClickCarts = () => navigate('/paniers');
  return (
    <Page>
      <div className="home-container">
        <div className="home">
          <img className="home-logo" src={logo} alt="logo Tournichette" />
          <div className="home-annoncement">
            Les ventes sont ouvertes
          </div>
          <div className="home-button-group">
            <div
              className="home-button-container top"
              onClick={handleClickCarts}
            >
              <h2 className="home-button-title">Mon panier de légumes</h2>
              <button
                className="home-button"
                type="button"
              >
                <ion-icon name="arrow-forward-circle-outline" style={{ color: '#f88e6d', fontSize: '50px' }} />
              </button>
            </div>

            <div
              className="home-button-container"
              onClick={handleClickProducts}
            >
              <h2 className="home-button-title"> Choisir au détail</h2>
              <button
                className="home-button"
                type="button"
                onClick={handleClickProducts}
              >
                <ion-icon name="arrow-forward-circle-outline" style={{ color: '#f88e6d', fontSize: '50px' }} />
              </button>
            </div>

          </div>

        </div>
      </div>
    </Page>
  );
}
export default Home;
