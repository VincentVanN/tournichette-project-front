import Page from '../Page/Page';
import 'src/components/DevTeam/devTeam.scss';
import vincent from './vincent.jpeg';
import julie from './julie.jpeg';
import sophie from './sophie.jpg';
import steve from './steve.jpeg';
import florent from './florent.jpg';

function DevTeam() {
  return (
    <Page>
      <div className="devTeam">
        <h2>Dev Team</h2>
        <p>La Dev Team est composé de:</p>
        <div className="devTeam_cards">
          <div className="devTeam_card">
            <h3>Vincent Van Nieuwenborgh</h3>
            <img className="devTeam_image" src={vincent} alt="vincent" />
            <a href="https://www.linkedin.com/in/vincent-van-nieuwenborgh-1b45a4243/">Linkedin</a>
          </div>
          <div className="devTeam_card">
            <h3>Florent Genestier</h3>
            <img className="devTeam_image" src={florent} alt="florent" />
            <a href="https://www.linkedin.com/in/florent-genestier/">Linkedin</a>
          </div>
          <div className="devTeam_card">
            <h3>Steve Amat</h3>
            <img className="devTeam_image" src={steve} alt="steve" />
            <a href="https://www.linkedin.com/in/steve-amat/">Linkedin</a>
          </div>
          <div className="devTeam_card">
            <h3>Sophie Charles</h3>
            <img className="devTeam_image" src={sophie} alt="sophie" />
            <a href="https://www.linkedin.com/in/sophiecharles-webdeveloper/">Linkedin</a>
          </div>
          <div className="devTeam_card">
            <h3>Julie Pajot</h3>
            <img className="devTeam_image" src={julie} alt="julie" />
            <a href="https://www.linkedin.com/in/julie-pajot/">Linkedin</a>
          </div>
        </div>
        <p className="devTeam_info">Si vous souhaitez nous contacter pour créer des sites merveilleux, appelez nous!!  </p>
      </div>
    </Page>

  );
}

export default DevTeam;
