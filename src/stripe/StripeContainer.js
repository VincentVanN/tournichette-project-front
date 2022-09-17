import './stripeContainer.scss';
import { loadStripe } from 'react-stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import CheckoutForm from './CheckoutForm';

const PUBLIC_KEY = 'pk_test_51Lg4rDEUfQPSV59kZLzUyYVz3DHuJprHXB7Nv6PozToLr3ddyVlyj8NoEndy4Z1qdLkGRo3TWUnyN7Y4SA9Kz4TI00PnqOc0yx';
const stripePromise = loadStripe(PUBLIC_KEY);

function Stripe() {
  const [clientSecret, setClientSecret] = useState('');
  const amount = useSelector((state) => state.shoppingCart.cartAmount);
  useEffect(() => {
    // Create PaymentIntent as soon as the page loads
    fetch('http://localhost:5000/create-payment-intent', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ amount: amount }),
    })
      .then((res) => res.json())
      .then((data) => setClientSecret(data.clientSecret));
  }, []);
  const appearance = {
    theme: 'stripe',
  };
  const options = {
    clientSecret,
    appearance,
  };
  return (
    <div className="stripe">
      {clientSecret && (
        <Elements options={options} stripe={stripePromise}>
          <CheckoutForm />
        </Elements>
      )}
    </div>
  );
}

export default Stripe;
