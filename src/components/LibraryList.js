import React, { Component } from 'react';
import { ListView } from 'react-native';
import { connect } from 'react-redux';
import ListItem from './ListItem';

class LibraryList extends Component {
	
	componentWillMount() {
		// Boiler Plate code for initializing datasource for ListView (look at image in redux/rn folder)
		const ds = new ListView.DataSource({
			rowHasChanged: (r1, r2) => r1 !== r2
		})
		//								List of libraries is our DataSource
		//										V    V   V 
		this.dataSource = ds.cloneWithRows(this.props.libraries);
	}//end componentWillMount

	renderRow(library) {
		// library is the element in the list that it is trying to currently render

		// We have to tell the ListView how to render a very specific row
		// This is going to figure out how to just render a single library inside of our LibraryList
		// Passing library to ListItem as a prop
		return <ListItem  library={library} />;
	}//end renderRoww

	render(){
	//console.log(this.props);

		return(
			<ListView 
			dataSource={this.dataSource}
			renderRow={this.renderRow}
			/>
		);
	}
}


const mapStateToProps = state => {
// This fucntion will map over the state obj,
// take some properties off that state obj and,
// then provide them as props to LibraryList compt
//console.log("This is our state : " + state); 
	
	// Making an obj w/ key of libraries
	return { libraries: state.libraries };
	// now im going to expect that my component LibraryList has a 
	// props of libraries and the value of the array of libraries

};// end mapStateToProps

export default connect(mapStateToProps)(LibraryList);

//Explination of line 19:
// -It calls the function connect (connect is a function)
// -When connect is called it returns another function
// -We call that return function with LibraryList , EXAMPLE: ReturnFunction(LibraryList)


// We need to forge a connection from thsi LibraryList compt to the Store( which hold our data)

// A CONNECT HELPER will help us get some amount of data and push it
// into the LibraryList from our store 

//Connect - is a tool that is used to connect a component to the redux store