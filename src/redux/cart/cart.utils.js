export const addItemToCart = (cartItems, cartItemToAdd) => {
	const foundCartItem = cartItems.find(
		cartItem => cartItemToAdd.id === cartItem.id
	);

	if (foundCartItem) {
		return cartItems.map(cartItem =>
			cartItem.id === cartItemToAdd.id
				? { ...cartItem, quantity: cartItem.quantity + 1 }
				: cartItem
		);
	}

	return [...cartItems, { ...cartItemToAdd, quantity: 1 }];
};
