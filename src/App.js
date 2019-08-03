import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";

import "./App.css";

import ShopPage from "./pages/shop/shop";
import HomePage from "./pages/homepage/homepage";
import Header from "./components/header/header";
import SignInAndSignUp from "./pages/sign-in-and-sign-up/sign-in-and-sign-up";
import { setCurrentUser } from "./redux/user/user.actions";

import { auth, createUserProfileDocument } from "./firebase/firebase.utils";

class App extends React.Component {
	unsubscribeFromAuth = null;

	componentDidMount() {
		const { setCurrentUser } = this.props;

		this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
			if (userAuth) {
				const userRef = await createUserProfileDocument(userAuth);

				userRef.onSnapshot(userSnapshot => {
					setCurrentUser({
						id: userSnapshot.id,
						...userSnapshot.data()
					});
				});
			} else {
				setCurrentUser(null);
			}
		});
	}

	componentWillUnmount() {
		this.unsubscribeFromAuth();
	}

	render() {
		return (
			<div>
				<Header />
				<Switch>
					<Route exact path="/" component={HomePage} />
					<Route path="/shop" component={ShopPage} />
					<Route
						exact
						path="/signin"
						render={() =>
							this.props.currentUser ? <Redirect to="/" /> : <SignInAndSignUp />
						}
					/>
				</Switch>
			</div>
		);
	}
}

const mapDispatchToProps = dispatch => ({
	setCurrentUser: user => dispatch(setCurrentUser(user))
});

const mapStateToProps = ({ user }) => ({
	currentUser: user.currentUser
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(App);
