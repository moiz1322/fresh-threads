import { createSelector } from "reselect";

const selectShop = state => state.shop;

export const selectCollections = createSelector(
	[selectShop],
	shop => shop.collections
);

export const selectCollectionsForOverview = createSelector(
	[selectCollections],
	collections =>
		Object.keys(collections).map(keyCollection => collections[keyCollection])
);

export const selectCollection = urlParam =>
	createSelector(
		[selectCollections],
		collections => collections[urlParam]
	);
