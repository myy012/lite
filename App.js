/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
// import './src/icon/iconfont';
import '@babel/polyfill';
import React, { Component } from 'react';
import { Provider } from 'react-redux';
import './src/config/ReactotronConfig';
import DebugConfig from './src/config/DebugConfig';
import { App } from './src/routes';
import createStore from './src/redux';

// create our store
const store = createStore();
if (__DEV__) {
    GLOBAL.XMLHttpRequest = GLOBAL.originalXMLHttpRequest || GLOBAL.XMLHttpRequest
}

class Lite extends Component {
    render () {
        return (
            <Provider store={store}>
                <App />
            </Provider>
        )
    }
}

// allow reactotron overlay for fast design in dev mode
export default DebugConfig.useReactotron
  ? console.tron.overlay(Lite)
  : Lite
