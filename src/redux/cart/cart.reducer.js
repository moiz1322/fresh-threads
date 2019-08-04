import { CartTypes } from "./cart.types";
import { addItemToCart } from "./cart.utils";

const INITIAL_STATE = {
	showCartDropdown: false,
	cartItems: []
};

const CartDropdownReducer = (state = INITIAL_STATE, action) => {
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
		default:
			return state;
	}
};

export default CartDropdownReducer;
