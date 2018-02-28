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
	WebView
} from 'react-native';

const instructions = Platform.select({
	ios: 'Press Cmd+R to reload,\n' +
		'Cmd+D or shake for dev menu',
	android: 'Double tap R on your keyboard to reload,\n' +
		'Shake or press menu button for dev menu',
});

export default class App extends Component<{}> {
	render() {
		return (
			<View style={styles.container}>
				<WebView 
					startInLoadingState={true}
					style={styles.webview}
					source={{uri:this.props.navigation.state.params.url}}></WebView>
			</View>
		);
	}
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 20,
        backgroundColor: '#fff',
    },
    webview: {
        width: 375,
        height: 1000,
        backgroundColor: '#F5FCFF'
    }
});
