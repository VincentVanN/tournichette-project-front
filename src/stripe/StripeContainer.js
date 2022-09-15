import { loadStripe } from 'react-stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import CheckoutForm from './CheckoutForm';

const PUBLIC_KEY = 'pk_test_51Lg4rDEUfQPSV59kZLzUyYVz3DHuJprHXB7Nv6PozToLr3ddyVlyj8NoEndy4Z1qdLkGRo3TWUnyN7Y4SA9Kz4TI00PnqOc0yx';
const stripeTestPromise = loadStripe(PUBLIC_KEY);

function Stripe() {
  return (
    <Elements stripe={stripeTestPromise}>
      <CheckoutForm />
    </Elements>
  );
}

export default Stripe;
