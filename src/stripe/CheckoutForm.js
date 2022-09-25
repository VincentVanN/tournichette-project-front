/* eslint-disable no-shadow */
import PropTypes from 'prop-types';
import {
  PaymentElement, useStripe, useElements,
} from '@stripe/react-stripe-js';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import { setShowModal } from '../feature/navigation.slice';
import { setServerMessage } from '../feature/shoppingCart.slice';
import { postOrder } from '../AsyncChunk/AsyncChunkShoppingCart';

function CheckoutForm({ paymentIntentId, paymentCustomerId }) {
  const amount = useSelector((state) => state.shoppingCart.cartAmount);
  const stripe = useStripe();
  const elements = useElements();
  const [message, setMessage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    if (!stripe) {
      return;
    }
    const clientSecret = new URLSearchParams(window.location.search).get(
      'payment_intent_client_secret',
    );

    if (!clientSecret) {
      return;
    }
    stripe.retrievePaymentIntent(clientSecret).then(({ paymentIntent }) => {
      switch (paymentIntent.status) {
        case 'succeeded':
          setMessage('Paiement effectué!');
          break;
        case 'processing':
          setMessage('Paiement en cours');
          break;
        case 'requires_payment_method':
          dispatch(setServerMessage('Paiement annulé, veuillez réitérer.'));
          dispatch(setShowModal(true));
          break;
        default:
          dispatch(setServerMessage('Une erreur est survenue'));
          dispatch(setShowModal(true));
          break;
      }
    });
  }, [stripe]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) {
      return;
    }
    setIsLoading(true);
    const { error } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        return_url: 'http://localhost:8080/commande-ok',
      },
      redirect: 'if_required',
    });
    if (error) {
      console.log(error);
      dispatch(setServerMessage(error.message));
      dispatch(setShowModal(true));
    }
    if (!error) {
      dispatch(postOrder({ stripeCustomerId: paymentCustomerId, paymentId: paymentIntentId }));
      navigate('/commande-ok', { state: { origin: 'creditCard' } });
    }
    setIsLoading(false);
  };

  return (
    <form id="payment-form" onSubmit={handleSubmit}>
      <h2 className="title-paymentMethod">
        Saisis ta nouvelle carte
      </h2>
      <PaymentElement id="payment-element" />
      <button className="creditCard-button" type="submit" disabled={isLoading || !stripe || !elements} id="submit">
        <span id="button-text">
          {isLoading ? <div className="spinner" id="spinner" /> : `Payer maintenant ${amount}€`}
        </span>
      </button>
      {message && <div id="payment-message">{message}</div>}
    </form>
  );
}
CheckoutForm.propTypes = {
  paymentIntentId: PropTypes.string.isRequired,
  paymentCustomerId: PropTypes.string.isRequired,
};
export default CheckoutForm;
