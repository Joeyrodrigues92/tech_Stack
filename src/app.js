import React from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux';
import	{ createStore } from 'redux';
import reducers from './reducers';
import { Header } from './components/common';
import LibraryList from './components/LibraryList';

const App = () => {
	return (
		<Provider store={createStore(reducers)}>
			{/*We use flex on the tage, so it can fill up as much space as possible on screen
			 Notice the 2 curly braces, the first one is jsx, the second is to designate a js obj*/}
			<View style={{ flex: 1}}>	
				<Header headerText="Tech Stack" />
				<LibraryList />
			</View>
		</Provider>
	);
};

export default App;




// Provider Tag :
//		* Works togetehr with the store
//		* The purpose of the provider is what traslates all the data
//.       in the store into something that can be used by the react side of our app.
//		  ( communication glue  between redux and react. What makes them play nicely together )
//		
//		* Impotant Thing ABout The Provider Tag *
//		-The tag can only have one single child component!!
//		-That single child compt could have as many sub compts
//		
//	This has 2 child compts. That is not good
//			V V V V V V V V V V V

//		<Provider store={createStore(reducers)}>
//			<Header headertext="Tecg Stack" />
//			<View />
//		</Provider>
//- - - - - - - - - - - - - - - - - - - - - - - - 
//	This is a good provider tag
//			V V V V V V 

//		<Provider store={createStore(reducers)}>
//			<View>	
//				<Header headertext="Tecg Stack" />
//				...		}   Where other 
//				...		}			compts would go.
//			</View>
//		</Provider>






//* Importing Redux to reatc-natiev *
// {createStore(reducers)}, thats how we connect the reducer to the store
// Also must import line 5