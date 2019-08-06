import { CartTypes } from "./cart.types";
import {
	addItemToCart,
	removeItemFromCart,
	decreaseQuantityFromCart
} from "./cart.utils";

const INITIAL_STATE = {
	showCartDropdown: false,
	cartItems: []
};

const cartReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case CartTypes.TOGGLE_SHOW_CART_DROPDOWN:
			return {
				...state,
				showCartDropdown: !state.showCartDropdown
			};
		case CartTypes.ADD_ITEM:
			return {
				...state,
				cartItems: addItemToCart(state.cartItems, action.payload)
			};
		case CartTypes.REMOVE_ITEM:
			return {
				...state,
				cartItems: removeItemFromCart(state.cartItems, action.payload)
			};
		case CartTypes.DECREASE_ITEM_QUANTITY:
			return {
				...state,
				cartItems: decreaseQuantityFromCart(state.cartItems, action.payload)
			};
		default:
			return state;
	}
};

export default cartReducer;
