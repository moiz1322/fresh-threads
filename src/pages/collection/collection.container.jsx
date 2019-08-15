import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { compose } from "redux";

import CollectionPage from "./collection";
import WithSpinner from "../../components/with-spinner/with-spinner";
import { selectAreCollectionsLoading } from "../../redux/shop/shop.selector.js";

const mapStateToProps = createStructuredSelector({
	isLoading: selectAreCollectionsLoading
});

const CollectionContainer = compose(
	connect(mapStateToProps),
	WithSpinner
)(CollectionPage);

export default CollectionContainer;
