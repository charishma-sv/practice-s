import React from 'react';
import { loadStripe } from '@stripe/stripe-js';
function Donate() {
  const stripePromise = loadStripe(
    'pk_test_51JiNn0FSnM5fxxMrzxIXMIkN6QRWSczyksfBPkipUBlI7KlsOCPg66em28XTbJ1E56PXryjgvL3uyMmlbgbG1Ris00vFvwcJH2'
  );

  const [frequency, setFrequency] = React.useState('one_time');
  const [disable, setDisable] = React.useState(false);
  const [amount, setAmount] = React.useState('');
  const handleClick = (event) => {
    event.preventDefault();
    setAmount(event.target.id);
  };
  const handleFrequency = (event) => {
    event.preventDefault();
    // console.log(event.target.id);
    setFrequency(event.target.id);
    // if (event.target.id === 'monthly') {
    //   setFrequency(true);
    //   console.log('setFre is one_time');
    // } else if (event.target.id === 'one_time') {
    //   setFrequency(false);
    //   console.log('setFre is monthly');
    // }
  };
  const handlePay = async (event) => {
    event.preventDefault();
    setDisable(true);
    // console.log('amount freq', amount, frequency);
    const domain = window.location.href.replace(/[^/]*$/, '');
    const stripe = await stripePromise;
    const { error } = await stripe.redirectToCheckout({
      lineItems: [
        {
          price: amount, // Replace with the ID of your price
          quantity: 1,
        },
      ],
      mode: 'payment',
      successUrl: domain + 'success?session_id={CHECKOUT_SESSION_ID}',
      cancelUrl: domain + 'failure?session_id={CHECKOUT_SESSION_ID}',
    });
    // If `redirectToCheckout` fails due to a browser or network
    // error, display the localized error message to your customer
    // using `error.message`.
    console.log(error);
  };
  //   console.log('frequency is', frequency);
  return (
    <div>
      <div>
        <button id="one_time" onClick={handleFrequency}>
          one_time
        </button>
        <button id="monthly" onClick={handleFrequency}>
          monthly
        </button>
      </div>
      <div>
        <button
          id="price_1JnUWfFSnM5fxxMrmgb4wesu"
          className="btn btn-primary"
          onClick={handleClick}
        >
          $5
        </button>
        <button
          id="price_1Jnb9NFSnM5fxxMr1969ezhj"
          className="btn btn-primary"
          onClick={handleClick}
        >
          $10
        </button>
      </div>
      <button onClick={handlePay} disabled={disable}>
        pay
      </button>
    </div>
  );
}

export default Donate;
