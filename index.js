/** @format */

import React,{Component} from 'react'
import {AppRegistry} from 'react-native';
// import App from './App';
import {name as appName} from './app.json';

import AppNavigator from './src/components/navigator/AppNavigator'

import {Provider} from 'react-redux'

import configureStore  from './src/redux/store/index'

const store = configureStore()

class App extends Component {
    render(){
        return(
            <Provider store={store}>
                <AppNavigator/>
            </Provider>
        )
    }
}



AppRegistry.registerComponent(appName, () => App);
