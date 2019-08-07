import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
	const priceForStripe = price * 100;
	const publishableKey = "pk_test_lRjwDNxNON9UGevs5DeolRDy00RiTNercO";

	const onToken = token => {
		console.log(token);
		alert("Payment Successful");
	};

	return (
		<StripeCheckout
			label="Pay Now"
			name="Fresh Threads"
			billingAddress
			shippingAddress
			image="http://svgshare.com/i/CUz.svg"
			description={`Your total is $${price} USD`}
			amount={priceForStripe}
			panelLabel="PayNow"
			token={onToken}
			stripeKey={publishableKey}
		/>
	);
};

export default StripeCheckoutButton;
