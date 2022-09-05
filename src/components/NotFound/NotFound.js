import Page from '../Page/Page';
import './notFound.scss';
import ParallaxText from './ParallaxText';

function NotFound() {
  return (
    <Page>
      <div className="notFound">
        404
      </div>
      <div className="container-notFound">
        <div className="notF">404</div>
        <section>
          <div className="container">
            <div className="rabbit">
              <div className="face" />
              <div className="ear left" />
              <div className="ear right" />
              <div className="eye left">
                <div className="iris" />
              </div>
              <div className="eye right">
                <div className="iris" />
              </div>
              <div className="nose" />
              <div className="mouth" />
              <div className="teeth" />
              <div className="hairs">
                <div />
                <div />
                <div />
                <div />
                <div />
                <div />
              </div>
            </div>
          </div>
          <ParallaxText className="paraOne" baseVelocity={4}>CARROT NOT FOUND</ParallaxText>
        </section>

      </div>
    </Page>

  );
}

export default NotFound;
