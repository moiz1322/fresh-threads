import React from "react";
import { connect } from "react-redux";

import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
import { toggleShowCartDropdown } from "../../redux/cart/cart.actions.js";

import "./cart-icon.scss";

const CartIcon = ({ toggleShowCartDropdown }) => (
	<div className="cart-icon" onClick={toggleShowCartDropdown}>
		<ShoppingIcon className="shopping-icon" />
		<span className="item-count">0</span>
	</div>
);

const mapDispatchToProps = dispatch => ({
	toggleShowCartDropdown: () => dispatch(toggleShowCartDropdown())
});

export default connect(
	null,
	mapDispatchToProps
)(CartIcon);
