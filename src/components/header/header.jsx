import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import CartIcon from "../cart-icon/cart-icon";
import CartDropdown from "../cart-dropdown/cart-dropdown.js";
import { selectShowCartDropdown } from "../../redux/cart/cart.selector.js";
import { selectCurrentUser } from "../../redux/user/user.selector.js";
import { signOutStart } from "../../redux/user/user.actions";

import { ReactComponent as Logo } from "../../assets/crown.svg";

import {
	HeaderContainer,
	LogoContainer,
	OptionsContainer,
	OptionLink
} from "./header.styles";

const Header = ({ currentUser, showCartDropdown, signOutStart }) => (
	<HeaderContainer>
		<LogoContainer to="/">
			<Logo className="logo" />
		</LogoContainer>
		<OptionsContainer>
			<OptionLink to="/shop">SHOP</OptionLink>
			<OptionLink to="/shop">CONTACT</OptionLink>
			{currentUser ? (
				<OptionLink as="div" onClick={signOutStart}>
					SIGN OUT{" "}
				</OptionLink>
			) : (
				<OptionLink to="/signin">SIGN IN </OptionLink>
			)}
			<CartIcon />
		</OptionsContainer>
		{showCartDropdown ? <CartDropdown /> : null}
	</HeaderContainer>
);

const mapStateToProps = createStructuredSelector({
	currentUser: selectCurrentUser,
	showCartDropdown: selectShowCartDropdown
});

const mapDispatchToProps = dispatch => ({
	signOutStart: () => dispatch(signOutStart())
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Header);
