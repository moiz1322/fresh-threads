import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import MenuItem from "../menu-item/menu-item";
import { selectSections } from "../../redux/directory/directory.selector.js";

import "./directory.scss";

const Directory = ({ sections }) => (
	<div className="directory-menu">
		{sections.map(({ id, ...otherSectionProps }) => (
			<MenuItem key={id} {...otherSectionProps} />
		))}
	</div>
);

const mapStateToProps = createStructuredSelector({
	sections: selectSections
});

export default connect(mapStateToProps)(Directory);
