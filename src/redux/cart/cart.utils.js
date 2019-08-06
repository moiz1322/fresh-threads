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

export const removeItemFromCart = (cartItems, cartItemtoRemove) => {
	return cartItems.filter(cartItem => cartItem.id !== cartItemtoRemove.id);
};

export const decreaseQuantityFromCart = (cartItems, cartItemToDecrease) => {
	if (cartItemToDecrease.quantity < 2) {
		return removeItemFromCart(cartItems, cartItemToDecrease);
	} else {
		return cartItems.map(cartItem =>
			cartItem.id === cartItemToDecrease.id
				? { ...cartItem, quantity: cartItem.quantity - 1 }
				: cartItem
		);
	}
};
