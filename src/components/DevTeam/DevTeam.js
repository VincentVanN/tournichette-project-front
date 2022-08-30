import Page from '../Page/Page';
import 'src/components/DevTeam/devTeam.scss';

function DevTeam() {
  return (
    <Page>
      <div className="devTeam">
        <h2>Dev Team</h2>
        <p>La Dev Team est composée de:</p>
        <div className="devTeam_cards">
          <div className="devTeam_card">
            <h3>Vincent Van Nieuwenborgh</h3>
            <a href="https://www.linkedin.com/in/vincent-van-nieuwenborgh-1b45a4243/">
              <ion-icon name="logo-linkedin" />
            </a>
            <a href="https://github.com/VincentVanN">
              <ion-icon name="logo-github" />
            </a>
          </div>
          <div className="devTeam_card">
            <h3>Florent Genestier</h3>
            <a href="https://www.linkedin.com/in/florent-genestier/">
              <ion-icon name="logo-linkedin" />
            </a>
            <a href="https://github.com/Florent-Genestier">
              <ion-icon name="logo-github" />
            </a>
          </div>
          <div className="devTeam_card">
            <h3>Steve</h3>
            <h3>Amat</h3>
            <a href="https://www.linkedin.com/in/steve-amat/">
              <ion-icon name="logo-linkedin" />
            </a>
            <a href="https://github.com/Steve-Amat">
              <ion-icon name="logo-github" />
            </a>
          </div>
          <div className="devTeam_card">
            <h3>Julie</h3>
            <h3>Pajot</h3>
            <a href="https://www.linkedin.com/in/julie-pajot/">
              <ion-icon name="logo-linkedin" />
            </a>
            <a href="https://github.com/j-Pajot">
              <ion-icon name="logo-github" />
            </a>
          </div>
        </div>
        <p className="devTeam_info">Si tu souhaites nous contacter pour créer des sites merveilleux, hésite pas!  </p>
      </div>
    </Page>

  );
}

export default DevTeam;
