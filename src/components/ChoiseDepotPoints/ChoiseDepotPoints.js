import { useDispatch, useSelector } from 'react-redux';
import { motion } from 'framer-motion';
import { postOrder } from '../../AsyncChunk/AsyncChunkShoppingCart';
import { getSelectedDepotId, setSelectedDepot } from '../../feature/shoppingCart.slice';
import './choiseDepotPoints.scss';
import {
  setButtonText,
  setRedirection,
  setShowModal,
} from '../../feature/navigation.slice';

function ChoiseDepotPoints() {
  const dispatch = useDispatch();
  const depots = useSelector((state) => state.shoppingCart.depots.data);
  const selectedDepot = useSelector((state) => state.shoppingCart.selectedDepot);
  //
  // get adress of depots
  //
  const ArrayOfDepotsAdress = [];
  depots.forEach((depot) => ArrayOfDepotsAdress.push(depot.address));
  //
  // get depot id & adress in state when selectedDepot value change
  //
  const handleChange = (e) => {
    dispatch(setSelectedDepot(e.target.id));
    dispatch(getSelectedDepotId());
  };
  //
  // set message state and modal
  //
  const handleClick = () => {
    dispatch(setRedirection('/'));
    dispatch(setButtonText('Retour à l\'accueil'));
    dispatch(postOrder());
    dispatch(setShowModal(true));
  };
  //
  // change icon color at selection
  const ValidateColor = selectedDepot ? '#fd7c55' : '#356859';
  return (
    <div className="depot-container">
      <div className="title">
        <ion-icon name="bag-check-outline" style={{ paddingBottom: '5px' }} />
        <p>Clique sur ton point de retrait</p>
      </div>
      <ul className="radio-container">
        {ArrayOfDepotsAdress.map((adress) => (
          <li>
            <input
              key={adress}
              type="radio"
              className="radio"
              id={adress}
              name="adressRadio"
              checked={adress === selectedDepot}
              onChange={handleChange}
            />
            <label className={adress === selectedDepot ? 'selected' : ''} htmlFor={adress}>{adress}</label>
          </li>
        ))}
      </ul>
      {selectedDepot && (
      <motion.div
        className="validOrderButton"
        onClick={handleClick}
        initial={{ x: '-100vw' }}
        animate={{ x: 0 }}
      >
        <p>Commander</p>
        <ion-icon name="checkmark-circle-outline" style={{ color: ValidateColor }} />
      </motion.div>
      )}
    </div>
  );
}

export default ChoiseDepotPoints;
