import React,{Component} from 'react'
import {
    createBottomTabNavigator,
    createStackNavigator
} from 'react-navigation'

import ReportScreen from './../home/ReportScreen'
import SettingsScreen from './../home/SettingsScreen'
import WatchListScreen from './../home/WatchListScreen'

import IntroScreen from './../intro/IntroScreen'
import LoginScreen from './../login/LoginScreen'

const HomeTabNavigator = createBottomTabNavigator({
    ReportScreen : {
        screen : ReportScreen,
        navigationOptions: ({navigation}) => ({
            title: 'Report'
            })
    },
    WatchListScreen : {
        screen : WatchListScreen,
        navigationOptions: ({navigation}) => ({
            title: 'WatchList'
            })
    },
    SettingsScreen : {
        screen : SettingsScreen,
        navigationOptions: ({navigation}) => ({
            title: 'Settings',
            titleStyle: {
                color: '#fefefe',
                fontWeight: '300',
                justifyContent: 'center',
                textAlign: 'center'
              },
            })
        
    },
    
},{
    tabBarOptions: {
        activeTintColor: '#fff',
        inactiveTintColor: '#a5a1ac',
        labelStyle : {
            fontSize: 18,
            textAlignVertical : 'center'
        },
        style: {
            backgroundColor: '#651fff'
          },
      }
}
)

const AppStackNavigator = createStackNavigator(
    {
        homeScreen : HomeTabNavigator,
        IntroScreen : IntroScreen,
        LoginScreen : LoginScreen

    },{
        headerMode : 'none',
        initialRouteName : 'IntroScreen',        
    }
)

export default class AppNavigator extends Component {
    render(){
        return <AppStackNavigator />
    }
}