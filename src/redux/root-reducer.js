import { combineReducers } from "redux";

import userReducer from "./user/user.reducer";
import cartDropdown from "./cart/cart.reducer";

export default combineReducers({
	user: userReducer,
	cart: cartDropdown
});
