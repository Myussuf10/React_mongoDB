import React, { Component } from 'react';
import StripeCheckout from 'react-stripe-checkout';


class StripePayment extends Component {


	render() {

		return (

			<StripeCheckout 
			amount={500}
			token={token => console.log(token)}
			stripeKey = {process.env.REACT_APP_STRIPE_KEY}
			>
			<button className="btn"> Add Credits</button>
			</StripeCheckout>
			);

	}
}


export default StripePayment;