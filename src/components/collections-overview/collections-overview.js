import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import "./collections-overview.scss";

import CollectionPreview from "../collection-preview/collection-preview.jsx";
import { selectCollectionsForOverview } from "../../redux/shop/shop.selector.js";

const CollectionsOverview = ({ collections }) => (
	<div className="collection-overview">
		{collections.map(({ id, ...otherProps }) => (
			<CollectionPreview key={id} {...otherProps} />
		))}
	</div>
);

const mapStateToProps = createStructuredSelector({
	collections: selectCollectionsForOverview
});

export default connect(mapStateToProps)(CollectionsOverview);
