/* eslint-disable max-len */
import 'src/components/Contact/contact.scss';
import Page from '../Page/Page';

function Contact() {
  return (
    <Page>
      <div className="contact">
        <h2>CONTACTEZ-NOUS !</h2>
        <p>
          Vous avez faim de bio légumes ? Vous voulez plus de renseignement sur nos paniers ? nous faire part d’une idée,  d’une critique ou de votre admiration sans bornes ? nous soutenir ou nous encourager ? Ou alors vous aimeriez partager vos propres aventures ? 🙂 Écrivez-nous, nous nous ferons un plaisir de vous répondre !
          Pour une réponse rapide (commande, etc.), privilégiez toutefois le téléphone:
        </p>
        <p>0981731287</p>
        <p>
          ou le mail direct à:
        </p>
        <a href="mailto:panier@tournichette.fr?subject=Questions">panier@tournichette.fr</a>
        <p>Merci !</p>
      </div>
    </Page>

  );
}

export default Contact;
