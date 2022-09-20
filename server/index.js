const express = require('express');
require('dotenv').config();

const app = express();
const stripe = require('stripe')(process.env.STRIPE_SECRET_TEST);

const cors = require('cors');

app.use(express.static('public'));
app.use(express.json());
app.use(cors());
const calculateOrderAmount = (amount) => Math.round(amount * 100);

app.post('/create-customer', async (req, res) => {
  const { email } = req.body;
  const customer = await stripe.customers.create({
    description: 'My First Test Customer',
    email: email,
  });
  res.send(
    {
      customer: customer,
    },
  );
});
app.post('/update-payment-intent', async (req, res) => {
  const { paymentMethod, paymentIntentId } = req.body;
  console.log(paymentMethod);
  const paymentIntent = await stripe.paymentIntents.update(
    paymentIntentId,
    { payment_method: paymentMethod },
  );
  console.log(paymentIntent);
  res.send(
    {
      clientSecret: paymentIntent.client_secret,
    },
  );
});
app.post('/create-payment-intent', async (req, res) => {
  const { amount, customer } = req.body;
  const paymentMethods = await stripe.customers.listPaymentMethods(
    customer,
    { type: 'card' },
  );
  const paymentIntent = await stripe.paymentIntents.create({
    amount: calculateOrderAmount(amount),
    currency: 'EUR',
    description: 'La Tournichette',
    automatic_payment_methods: {
      enabled: true,
    },
    customer: customer,
    setup_future_usage: 'on_session',
  });
  res.send(
    {
      clientSecret: paymentIntent.client_secret,
      paymentIntentId: paymentIntent.id,
      paymentMethods: paymentMethods,
    },
  );
});

app.listen(process.env.PORT || 5000, () => {
  console.log('serveur démarré...');
});
