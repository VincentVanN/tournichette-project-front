// Dependencies
const http = require('http');
const express = require('express');

const app = express();

// app.use((req, res) => {
//   res.send('Hello there !');
// });

// Starting both http & https servers
const httpServer = http.createServer(app);

/* eslint-disable max-len */

require('dotenv').config();

const cors = require('cors');

const stripe = require('stripe')(process.env.STRIPE_SECRET_TEST);

const corsOptions = {
  origin: 'https://www.tournichette.fr',
  optionsSuccessStatus: 200,
};

app.use(express.static('public'));
app.use(express.json());
const calculateOrderAmount = (amount) => Math.round(amount * 100);

app.post('/create-customer', cors(corsOptions), async (req, res) => {
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
app.post('/update-payment-intent', cors(corsOptions), async (req, res) => {
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
app.post('/create-payment-intent', cors(corsOptions), async (req, res) => {
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
app.post('/charge-existing-card', cors(corsOptions), async (req, res) => {
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
app.post('/delete-card', cors(corsOptions), async (req, res) => {
  const { paymentMethodIdList } = req.body;
  const paymentMethod = await paymentMethodIdList.forEach((element) => stripe.paymentMethods.detach(element));
  res.send(
    {
      paymentMethod,
    },
  );
});
httpServer.listen(80, () => {
  console.log('HTTP Server running on port 80');
});
