export default (state, action)=> {
	console.log(action);
	return null;
};

// The pupose of this reducer is to record whether or not a particular library is selected
// We must give this reducer something to return
// Reducers can never return undefined
// Since no Library has been selected yet, and we dont 
// want to have a pre selected row, when the application loads
// we just return null