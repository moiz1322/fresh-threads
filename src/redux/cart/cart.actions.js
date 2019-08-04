import { CartTypes } from "./cart.types";

export const toggleShowCartDropdown = () => ({
	type: CartTypes.TOGGLE_SHOW_CART_DROPDOWN
});

export const addItem = item => ({
	type: CartTypes.ADD_ITEM,
	payload: item
});
