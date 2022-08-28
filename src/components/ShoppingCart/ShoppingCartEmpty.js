import { useNavigate } from 'react-router';

function ShoppingCartEmpty() {
  const navigate = useNavigate();
  const handleClick = () => navigate('/liste');
  return (
    <div className="shoppingCart">
      <div
        className="shoppingCart-empty"
        onClick={handleClick}
      >
        <div
          className="shoppingCart-empty-title"
        >Ton panier est vide
        </div>
        <div
          className="shoppingCart-empty-content"
        >
          pour tes courses c'est par ici!
        </div>
        <ion-icon name="arrow-forward-circle-outline" size="large" />
      </div>
    </div>
  );
}

export default ShoppingCartEmpty;
