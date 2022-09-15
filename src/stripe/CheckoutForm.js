/* eslint-disable no-shadow */
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import axios from 'axios';

function CheckoutForm() {
  const stripe = useStripe();
  const elements = useElements();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card: elements.getElement(CardElement),
    });
    if (!error) {
      console.log('token généré', paymentMethod);
      try {
        const { id } = paymentMethod;
        const response = await axios.post(
          'http://localhost:5000/stripe/charge',
          {
            amount: 100,
            id: id,
          },
        );
        if (response.data.success) {
          console.log('paiement réussi');
        }
        console.log(response);
      }
      catch (error) {
        console.log('erreur!', error);
      }
    }
    else {
      console.log(error.message);
    }
  };
  return (
    <form
      onSubmit={handleSubmit}
      style={{ minWidth: 400 }}
    >
      <CardElement
        options={{
          hidePostalCode: true,
        }}
      />
      <button
        type="submit"
      >Valider
      </button>
    </form>
  );
}

export default CheckoutForm;
