/* eslint-disable no-unused-vars */
const express = require('express');

const app = express();
require('dotenv').config();
const stripe = require('stripe')(process.env.STRIPE_SECRET_TEST);
const bodyParser = require('body-parser');
const cors = require('cors');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

app.post('/stripe/charge', cors(), async (req, res) => {
  const { amount, id } = req.body;
  console.log('amount & ID', amount, id);
  try {
    const payment = await stripe.paymentIntents.create({
      amount: amount,
      currency: 'EUR',
      description: 'La Tournichette',
      payment_method: id,
      confirm: true,
    });
    res.json({
      message: 'paiement réussi',
      success: true,
    });
  }
  catch (error) {
    console.log('error', error);
    res.json({
      message: 'le paiement a échoué',
      success: false,
    });
  }
});
app.listen(process.env.PORT || 5000, () => {
  console.log('serveur démarré...');
});
