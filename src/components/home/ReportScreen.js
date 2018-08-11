import React,{Component} from 'react'
import {
    StyleSheet,
    View,
    Text
} from 'react-native'

export default class ReportScreen extends Component {
    render(){
        return(
            <View style={styles.rootContainer}>
                <Text>Report Screen</Text>
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