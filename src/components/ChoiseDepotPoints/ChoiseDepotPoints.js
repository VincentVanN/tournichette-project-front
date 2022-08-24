import { useDispatch, useSelector } from 'react-redux';
import { postOrder } from '../../AsyncChunk/AsyncChunkShoppingCart';
import { getSelectedDepotId, setSelectedDepot } from '../../feature/shoppingCart.slice';
import './choiseDepotPoints.scss';

function ChoiseDepotPoints() {
  const dispatch = useDispatch();
  const depots = useSelector((state) => state.shoppingCart.depots.data);
  const selectedDepot = useSelector((state) => state.shoppingCart.selectedDepot);
  //
  // get adress of depots
  const ArrayOfDepotsAdress = [];
  depots.forEach((depot) => ArrayOfDepotsAdress.push(depot.address));
  //
  // get depot id & adress in state when selectedDepot value change
  const handleChange = (e) => {
    dispatch(setSelectedDepot(e.target.id));
    dispatch(getSelectedDepotId());
  };
  const handleClick = () => {
    dispatch(postOrder());
  };
  //
  // change icon color at selection
  const ValidateColor = selectedDepot ? '#fd7c55' : '#356859';
  return (
    <div className="depot-container">
      <div className="title">
        <ion-icon name="bag-check-outline" style={{ paddingBottom: '5px' }} />
        <p>Ton point de retrait</p>
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
      <div
        className="choiseDepotButton"
        onClick={handleClick}
      >
        <p>Commander</p>
        <ion-icon name="checkmark-circle-outline" style={{ color: ValidateColor }} />
      </div>
    </div>
  );
}

export default ChoiseDepotPoints;
