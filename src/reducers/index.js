//For every reducer we create we have to wire it up to combineReducer call

// We are passing it an obj, and it has a key of libraries, and selectedLibraryID

// If we have multiple reducers, combineReducers will let them play nice together

//This is where we can find our state for application

import { combineReducers } from 'redux';
import LibraryReducer from './LibraryReducer';
import SelectionReducer from './SelectionReducer';

export default combineReducers({
	// LibraryReducer which holds a part of state (data)
	// is assigned to the libraries key of thiis combineReducer obj
	libraries: LibraryReducer,
	selectedLibraryID: SelectionReducer
});


