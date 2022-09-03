import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import { motion } from 'framer-motion';
import { postOrder } from '../../AsyncChunk/AsyncChunkShoppingCart';
import { deleteServerMessage, getSelectedDepotId, setSelectedDepot } from '../../feature/shoppingCart.slice';
import './choiseDepotPoints.scss';

function ChoiseDepotPoints() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const depots = useSelector((state) => state.shoppingCart.depots.data);
  const selectedDepot = useSelector((state) => state.shoppingCart.selectedDepot);
  const serverMessage = useSelector((state) => state.shoppingCart.serverMessage);
  //
  // get adress of depots
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
  // set message state
  //
  const [message, setMessage] = useState('');

  const handleClick = () => {
    if (!selectedDepot) {
      setMessage('Tu dois selectionner une adresse!');
      setTimeout(() => {
        setMessage('');
      }, 2000);
    }
    else {
      dispatch(postOrder());
      setTimeout(() => {
        dispatch(deleteServerMessage());
        navigate('/');
      }, 3500);
    }
  };
  //
  // change icon color at selection
  const ValidateColor = selectedDepot ? '#fd7c55' : '#356859';
  if (serverMessage) {
    return (
      <div className="serverMessage-container">
        <div className="serverMessage">{serverMessage}</div>
      </div>
    );
  }
  return (
    <div className="depot-container">
      <div className="title">
        <ion-icon name="bag-check-outline" style={{ paddingBottom: '5px' }} />
        <p>Clique sur ton point de retrait</p>
      </div>
      <div className="message-container">
        {message && (<div className="message">{message}</div>)}
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
