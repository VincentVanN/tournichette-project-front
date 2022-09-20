/* eslint-disable array-callback-return */
import './stripeContainer.scss';
import { loadStripe } from 'react-stripe-js';
import { motion } from 'framer-motion';
import { Elements } from '@stripe/react-stripe-js';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CheckoutForm from './CheckoutForm';
import { setpaymentCustomerId } from '../feature/shoppingCart.slice';

const PUBLIC_KEY = 'pk_test_51Lg4rDEUfQPSV59kZLzUyYVz3DHuJprHXB7Nv6PozToLr3ddyVlyj8NoEndy4Z1qdLkGRo3TWUnyN7Y4SA9Kz4TI00PnqOc0yx';
const stripePromise = loadStripe(PUBLIC_KEY);

function Stripe() {
  const [clientSecret, setClientSecret] = useState('');
  const amount = useSelector((state) => state.shoppingCart.cartAmount);
  const paymentCustomerId = useSelector((state) => state.shoppingCart.paymentCustomerId);
  const email = useSelector((state) => state.user.user.email);
  const dispatch = useDispatch();
  const [paymentMethods, setPaymentMethods] = useState([]);
  const [paymentIntentId, setpaymentIntentId] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('');
  const handleChangePaymentMethod = (e) => {
    setPaymentMethod(e.target.id);
    fetch('http://localhost:5000/update-payment-intent', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ paymentMethod: e.target.id, paymentIntentId }),
    })
      .then((res) => res.json())
      .then((data) => {
        setClientSecret(data.clientSecret);
      });
  };
  useEffect(() => {
    if (!paymentCustomerId) {
      fetch('http://localhost:5000/create-customer', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data.customer);
          dispatch(setpaymentCustomerId(data.customer.id));
        });
    }
    if (paymentCustomerId) {
      fetch('http://localhost:5000/create-payment-intent', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ amount, customer: paymentCustomerId }),
      })
        .then((res) => res.json())
        .then((data) => {
          setpaymentIntentId(data.paymentIntentId);
          setPaymentMethods(data.paymentMethods.data);
          setClientSecret(data.clientSecret);
        });
    }
  }, [paymentCustomerId]);
  const appearance = {
    theme: 'stripe',
  }
  const options = {
    clientSecret,
    appearance,
  };
  console.log(paymentIntentId);
  const paymentMethodArray = paymentMethods
    .filter((method, index) => method.card.last4[index + 1] === method.card.last4[index]);
  return (
    <div className="stripe">
      {(paymentMethods.length !== 0) && (
        <>
          <h2 className="title-paymentMethod">
            selectionne une carte
          </h2>
          <ul className="paymentMethod-container">
            {paymentMethodArray.map((method) => (
              <li
                key={method.id}
              >
                <label
                  htmlFor={method.id}
                  className={paymentMethod === method.id ? 'selected' : ''}
                >
                  <input
                    type="radio"
                    className="radio"
                    id={method.id}
                    name="paymentChoiseRadio"
                    checked={paymentMethod === method.id}
                    onChange={handleChangePaymentMethod}
                  />
                  <div className="paymentMethod">
                    <p
                      className="brand"
                    >{method.card.brand}
                    </p>
                    <p>**** **** **** {method.card.last4}</p>
                    <p>expire le {method.card.exp_month}/{method.card.exp_year}</p>
                    {paymentMethod === method.id && (
                    <svg xmlns="http://www.w3.org/2000/svg" className="ionicon" width="32" height="32" viewBox="0 0 512 512" color="#fd7c55"><title>Checkmark Circle</title>
                      <motion.path
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ duration: 0.5 }}
                        d="M448 256c0-106-86-192-192-192S64 150 64 256s86 192 192 192 192-86 192-192z"
                        fill="none"
                        stroke="currentColor"
                        strokeMiterlimit="10"
                        strokeWidth="32"
                      />
                      <motion.path
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ duration: 0.5 }}
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="32"
                        d="M352 176L217.6 336 160 272"
                      />
                    </svg>
                    )}
                  </div>

                </label>
              </li>
            ))}
          </ul>
        </>

      )}
      {clientSecret && (
        <Elements options={options} stripe={stripePromise}>
          <CheckoutForm />
        </Elements>
      )}
    </div>
  );
}

export default Stripe;
