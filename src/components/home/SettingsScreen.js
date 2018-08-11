import React,{Component} from 'react'
import {
    StyleSheet,
    View,
    Text
} from 'react-native'

export default class SettingsScreen extends Component {
    render(){
        return(
            <View style={styles.rootContainer}>
                <Text>Settings Screen</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    rootContainer : {
        flex : 1,
        alignItems : 'center',
        justifyContent : 'center'
    }
})