/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableHighlight
} from 'react-native';
import { connect } from 'react-redux';
import { NavigationActions } from 'react-navigation';
import { bindActionCreators } from 'redux';
import { ServiceActions } from '../redux/test';
import { API, http } from '../api';

const instructions = Platform.select({
	ios: 'Press Cmd+R to reload,\n' +
		'Cmd+D or shake for dev menu',
	android: 'Double tap R on your keyboard to reload,\n' +
		'Shake or press menu button for dev menu',
});

class App extends Component {
	jump = () => {
		this.props.dispatch(ServiceActions.getServiceInfo({id: null}));
	}
	jumpH5 = () => {
		this.props.navigation.dispatch(
			NavigationActions.navigate({
				routeName: 'h5',
				params: {
					url: 'https://www.baidu.com'
				}
			})
		)
	}
	render() {
		const info = JSON.stringify(this.props.info);
		return (
			<View style={styles.container}>
				<ScrollView>
					<TouchableHighlight onPress={this.jump} underlayColor="transparent" >
						<Text style={styles.welcome} >
							Welcome to 微信!{info}
						</Text>
					</TouchableHighlight>
					<TouchableHighlight onPress={this.jumpH5} underlayColor="transparent" >
						<Text style={styles.welcome} >
							测试H5
						</Text>
					</TouchableHighlight>
					<Text style={styles.instructions}>
					To get started, edit App.js
					</Text>
					<Text style={styles.instructions}>
					{instructions}
					</Text>
				</ScrollView>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#F5FCFF',
	},
	welcome: {
		fontSize: 20,
		textAlign: 'center',
		margin: 10,
	},
	instructions: {
		textAlign: 'center',
		color: '#333333',
		marginBottom: 5,
	},
});
const mapStateToProps = (state) => ({
	info: state.get('service').get('agreementId')
});

export default connect(mapStateToProps)(App);
