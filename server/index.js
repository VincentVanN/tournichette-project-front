const express = require('express');
require('dotenv').config();

const app = express();
const stripe = require('stripe')(process.env.STRIPE_SECRET_TEST);
const cors = require('cors');

app.use(express.static('public'));
app.use(express.json());
app.use(cors());

const calculateOrderAmount = (amount) => amount * 100;
app.post('/create-payment-intent', async (req, res) => {
  const { amount } = req.body;

  // Create a PaymentIntent with the order amount and currency
  const paymentIntent = await stripe.paymentIntents.create({
    amount: calculateOrderAmount(amount),
    currency: 'EUR',
    automatic_payment_methods: {
      enabled: true,
    },
  });

  res.send({
    clientSecret: paymentIntent.client_secret,
  });
});

app.listen(process.env.PORT || 5000, () => {
  console.log('serveur démarré...');
});
