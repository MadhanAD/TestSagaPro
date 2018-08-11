import React,{Component} from 'react'
import {
    StyleSheet,
    View,
    Text,
    TouchableWithoutFeedback,
    StatusBar
} from 'react-native'

import { NavigationActions, StackActions } from 'react-navigation'

export default class IntroScreen extends Component {
    render(){
        return(
            <View style={styles.rootContainer}>
            <StatusBar
                backgroundColor='#fff'
                barStyle='dark-content'
            />

            <View style={styles.bodyContainer}>

            </View>

            <View style={styles.joinRootContainer}>
                <TouchableWithoutFeedback 
                    style={styles.joinContainer}>
                    <Text style={styles.basicText}>JOIN 10,000</Text>
                </TouchableWithoutFeedback>
            </View>

            <View style={styles.signUpRootContainer}>
                <TouchableWithoutFeedback 
                    style={styles.signUpContainer}
                    onPress={
                        () => {

                            const resetAction = StackActions.reset({
                                    index: 0,
                                    actions: [NavigationActions.navigate({ routeName: 'LoginScreen' })],
                                })
                            this.props.navigation.dispatch(resetAction)
                            // this.props.navigation.navigate('LoginScreen')
                        }
                    }
                    >
                    <Text style={styles.basicText}>ALREADY A MEMBER? SIGNIN NOW</Text>
                </TouchableWithoutFeedback>
            </View>
                
            </View>
        )
    }
}

const styles = StyleSheet.create({
    rootContainer : {
        flex : 1,
        backgroundColor : '#fff'
    },
    bodyContainer : {
        flex : 8
    },
    joinRootContainer : {
        flex :1,
        marginLeft : 10,
        marginRight : 10,
        backgroundColor : '#00e676',
        alignItems : 'center',
        marginBottom : 5,
        marginTop : 5,
        justifyContent : 'center'
    },
    joinContainer :{
        alignItems : 'center',
        justifyContent : 'center'
    },
    signUpRootContainer :{
        flex :1,
        marginLeft : 10,
        marginRight : 10,
        marginBottom : 5,
        marginTop : 5,
        alignItems : 'center',
        justifyContent : 'center',
        backgroundColor : '#616161'
    },
    signUpContainer : {
        alignItems : 'center',
        justifyContent : 'center'
    },
    basicText : {
        color : '#fff',
        fontWeight : 'bold'
    }
    
})