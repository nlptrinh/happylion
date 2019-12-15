import React from 'react';
import { StyleSheet, Text, View, ActivityIndicator, } from 'react-native';

import HomeScreen from './HomeScreen';
import LoginScreen from './LoginScreen';

import firebase from 'firebase';

//-----------------------------------

export default class LoadingScreen extends React.Component {

	componentDidMount() {
		this.checkIfLoggedIn();
	};

	checkIfLoggedIn = () => {
		firebase.auth().onAuthStateChanged(user => {
			if (user) {
				this.props.navigation.navigate('HomeScreen');
			}
			else {
				this.props.navigation.navigate('LoginScreen');
			}
		});
	};

	render() {
		return (
			<View style={styles.container}>
				<ActivityIndicator size="large" />
			</View>
		);
	};
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center'
	}
});