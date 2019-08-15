import { CartTypes } from "./cart.types";

export const toggleShowCartDropdown = () => ({
	type: CartTypes.TOGGLE_SHOW_CART_DROPDOWN
});

export const addItem = item => ({
	type: CartTypes.ADD_ITEM,
	payload: item
});

export const removeItem = item => ({
	type: CartTypes.REMOVE_ITEM,
	payload: item
});

export const decreaseItemQuantity = item => ({
	type: CartTypes.DECREASE_ITEM_QUANTITY,
	payload: item
});

export const clearCart = () => ({
	type: CartTypes.CLEAR_CART
});
