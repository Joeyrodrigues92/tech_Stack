import React, { Component } from 'react';
import { Text, TouchableWithoutFeedback, View } from 'react-native';
import { connect } from 'react-redux';
import { CardSection } from './common';
import * as actions from '../actions';

class ListItem extends Component {
	render() {
		//console.log(this.props) //these are the actions from the connect method
		const { titleStyle } = styles;
		//destructuring the props.library from ListView compt
		const { id, title } = this.props.library;

		return (
			<TouchableWithoutFeedback 
				// selectLibrary  action creator is called when row is pressed
				onPress={() => this.props.selectLibrary(id)}
			>
				<View>
					<CardSection>
						<Text  style={titleStyle}>
							{title}
						</Text>
					</CardSection>
				</View>
			</TouchableWithoutFeedback>
		);

	}
}

const styles = {
	titleStyle: {
		fontSize: 18,
		paddingLeft: 15
	}
};

export default connect(null, actions)(ListItem); 


// Connect Method
// - The first arugument will be null b/c we dont want to mapStateToProps
//- The second argument is to bind action creators to this component
//		* Whenever they are called, make sure the action goes to the right place
//			- Whenever it is call it is automatically dispatched to the redux store
//		* and then pass these actions down into the compoenet as props  
//			- takes all the actions and passes them to our comppnent as props


// import  * as action from '../actions';
//	-Inside of my actions file  i might have many different action creators
//  	* When I want to export many things i just use the export keywords
//		* When I want to import many thngs from a file at one time and just get
//		  access to all of them, i use '* as (then some var right here)'
//	- '* as actions' means give me everything that was exported from the actions file
//    and assign it to the variable action