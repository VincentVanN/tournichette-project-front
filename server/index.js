/* eslint-disable max-len */
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
  const paymentIntent = await stripe.paymentIntents.update(
    paymentIntentId,
    { payment_method: paymentMethod },
  );
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
    setup_future_usage: 'off_session',
  });
  res.send(
    {
      clientSecret: paymentIntent.client_secret,
      paymentIntentId: paymentIntent.id,
      paymentMethods: paymentMethods,
    },
  );
});
app.post('/charge-existing-card', async (req, res) => {
  const { amount, paymentCustomerId, paymentMethod } = req.body;
  try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount: calculateOrderAmount(amount),
      currency: 'EUR',
      description: 'La Tournichette',
      payment_method: paymentMethod,
      customer: paymentCustomerId,
      off_session: true,
      confirm: true,
    });
    res.send(
      {
        succeeded: true,
        paymentIntentId: paymentIntent.id,
      },
    );
  }
  catch (err) {
    if (err.code === 'authentication_required') {
      res.send({
        error: 'authentication nécessaire, saisir la carte',
      });
    }
    else if (err.code) {
      res.send({
        error: err.code,
      });
    }
    else {
      console.log('une erreur est survenue', err);
    }
  }
});
app.post('/delete-card', async (req, res) => {
  const { paymentMethodIdList } = req.body;
  const paymentMethod = await paymentMethodIdList.forEach((element) => stripe.paymentMethods.detach(element));
  res.send(
    {
      paymentMethod,
    },
  );
});
// app.listen(process.env.PORT || 5000, () => {
//   console.log('serveur démarré...');
// });
