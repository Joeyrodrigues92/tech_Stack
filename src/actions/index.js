// We only need one action in this application

// We need to know which library is selected

// We pass in the id of the selected library
export const selectLibrary = (libraryId) => {
	return {
		// What we want to happen
		type: 'select_library',
		// The thing it'll happen too
		payload: libraryId
	};
};

// 			PROCESS FOR CALLING AN ACTION CREATOR

// 1. Determine where we want to call this action creator from
//		- Go to the filer that i want to call the actionc reator from (ListItem, go there)
// 2. Import that connect helper (in ListItem)
//		- We can use the connect helper to call an action creator
// Actions are returned as objects
