/* eslint-disable max-len */
import Page from '../Page/Page';
import './aboutUs.scss';

function AboutUs() {
  return (
    <Page>
      <div className="aboutUs">
        <h2>Qui sommes nous ?</h2>
        <p className="aboutUs-paragraph">
          Originaire de Valenciennes où il s’illustra dans sa jeunesse comme lanceur de marteau et perchiste dans le club d’athlétisme local, <span>Mathias</span> a été photographe et responsable de numérisation de fonds photo à Chalon-sur-Saône pendant une dizaine d’années. En créant le Panier de la Tournichette, il revient sur la terre de ses ancêtres, qu’il compte bien soigner avec tout le respect qui lui est dû, tout en contribuant à nourrir ses habitants avec les meilleurs légumes possibles.

        </p>
        <p className="aboutUs-paragraph">
          Nomade polyglotte à l’instar de son emblème au long cou, la girafe, <span>Karine</span> pose ses valises à la Tournichette après une trentaine d’années passées entre la Drôme/Hautes-Alpes, Paris, Montpellier, la Grèce et le Sénégal… Traductrice et éditrice de métier, elle aide Mathias au maraîchage, mais surtout à sa communication et à la vente des paniers, tout en rêvant à un projet futur de culture de plantes aromatiques et médicinales
        </p>
      </div>
    </Page>

  );
}
export default AboutUs;
