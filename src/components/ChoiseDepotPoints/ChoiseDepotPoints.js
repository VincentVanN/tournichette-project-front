import { useState } from 'react';
import { useSelector } from 'react-redux';
import './choiseDepotPoints.scss';

function ChoiseDepotPoints() {
  const depots = useSelector((state) => state.shoppingCart.depots.data);
  const ArrayOfDepotsAdress = [];
  depots.forEach((depot) => ArrayOfDepotsAdress.push(depot.address));
  const [selectedAdress, setSelectedAdress] = useState('');
  return (
    <div className="depot-container">
      <div className="title">
        <ion-icon name="bag-add-outline" />
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
              checked={adress === selectedAdress}
              onChange={(e) => setSelectedAdress(e.target.id)}
            />
            <label className={adress === selectedAdress ? 'selected' : ''} htmlFor={adress}>{adress} </label>
          </li>
        ))}
      </ul>
      <div
        className="choiseDepotButton"
      >
        <p>Commander</p>
        <ion-icon name="checkmark-circle-outline" />
      </div>
    </div>
  );
}

export default ChoiseDepotPoints;
