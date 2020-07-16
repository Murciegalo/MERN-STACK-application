import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = 'pk_test_qpk8XXIK4nkQNnyLqJ3RH5Mt009GgCH5Lr';

  const onToken = token => {
    axios({
      url: '/payment' ,
      method: 'post' ,
      data: {
        amount: priceForStripe ,
        token
      }
    })
    .then( 
      res => alert('Payment Succesful!')
    )
    .catch(
      err => {
        console.log('Payment error:' , err)
        alert('There was an issue with your payment method')
      }
    )
  };

  return (
    <StripeCheckout
      label='Book Now'
      name='FreakingTours Ltd.'
      billingAddress
      shippingAddress
      image={require('../../assets/pin.png')}
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel='Book Now'
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;