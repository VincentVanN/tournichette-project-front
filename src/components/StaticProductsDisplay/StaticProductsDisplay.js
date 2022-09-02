/* eslint-disable consistent-return */
import PropTypes from 'prop-types';
import { motion, AnimatePresence } from 'framer-motion';
import './staticProductsDisplay.scss';
import panier from 'src/components/StaticProductsDisplay/Brouette.jpg';
import epicerie from './produitsVerres.jpg';
import legumes from './HaricotsVert.jpg';
import detail from './detail.jpg';
import fruits from './fraises.jpg';
import Page from '../Page/Page';
import Loading from '../Loading/Loading';

function StaticProductsDisplay({ related }) {
  const image = () => {
    if (related === 'panier') {
      return panier;
    }
    if (related === 'epicerie') {
      return epicerie;
    }
    if (related === 'legumes') {
      return legumes;
    }
    if (related === 'detail') {
      return detail;
    }
    if (related === 'fruits') {
      return fruits;
    }
  };
  if (!related) {
    return (
      <Page>
        <Loading />
      </Page>
    );
  }
  return (
    <AnimatePresence>
      <div className="static-container">
        <div className="static-title-container">
          <motion.div
            className="static-title"
            initial={{ height: 0 }}
            animate={{ height: '70%' }}
            exit={{ opacity: 0, transition: { duration: 0.4 } }}
          >
            {related.toUpperCase()}
          </motion.div>
        </div>
        <motion.img
          src={image()}
          alt={related}
          className="static-image"
          initial={{ y: window.innerHeight }}
          animate={{ y: 0, transition: { duration: 0.30 } }}
          exit={{ y: -window.innerHeight, opacity: 0, transition: { duration: 0.4 } }}
        />
        <motion.div
          className="static-subtitle-container"
          initial={{ y: window.innerHeight }}
          animate={{ y: 0, transition: { duration: 0.30 } }}
          exit={{ y: -window.innerHeight, opacity: 0, transition: { duration: 0.4 } }}
        >
          <div
            className="static-subtitle"
          >
            Fais ton choix!
          </div>
        </motion.div>
      </div>
    </AnimatePresence>

  );
}
StaticProductsDisplay.propTypes = {
  related: PropTypes.string.isRequired,
};
export default StaticProductsDisplay;
