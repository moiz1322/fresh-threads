import { createSelector } from "reselect";

const selectShop = state => state.shop;

export const selectCollections = createSelector(
	[selectShop],
	shop => shop.collections
);

export const selectCollectionsForOverview = createSelector(
	[selectCollections],
	collections =>
		collections
			? Object.keys(collections).map(keyCollection => collections[keyCollection])
			: []
);

export const selectCollection = urlParam => {
	console.log(urlParam);
	return createSelector(
		[selectCollections],
		collections => (collections ? collections[urlParam] : null)
	);
};

export const selectIsCollectionFetching = createSelector(
	[selectShop],
	shop => shop.isFetching
);

export const selectAreCollectionsLoading = createSelector(
	[selectCollections],
	collections => !collections
);
