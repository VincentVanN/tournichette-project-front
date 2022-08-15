import Page from '../Page/Page';
import { useNavigate } from 'react-router';
import './home.scss';
import carottes from 'src/assets/carottes.jpg';

function Home() {
  const navigate = useNavigate();
  const handleClickCart = () => navigate('/panier');
  return (
    <Page>
      <div className="home">
        <div className="home_title">
          <h2>La tournichette-Un maraîcher bio dans l'Avesnois</h2>
        </div>
        <div className="home_twoBasket">
          <div className="home_basket">
            <h3>Petit Panier</h3>
            <img src={carottes} className="header-logo" alt="Logo oRecipes" />
            <button
              type="button"
              onClick={handleClickCart}
            >
              Mettre dans mon panier
            </button>
          </div>
          <div className="home_basket">
            <h3>Grand Panier</h3>
            <img src={carottes} className="header-logo" alt="Logo oRecipes" />
            <button
              type="button"
              onClick={handleClickCart}
            >
              Mettre dans mon panier
            </button>
          </div>
        </div>

      </div>
    </Page>
  );
}

export default Home;
