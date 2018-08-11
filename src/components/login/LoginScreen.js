import React,{Component} from 'react'
import {
    StyleSheet,
    View,
    Text,
    StatusBar,
    TouchableWithoutFeedback,
    TextInput,
    ToastAndroid,
    TouchableOpacity
} from 'react-native'

import { NavigationActions, StackActions } from 'react-navigation'

import { LoginActions } from '../../redux/actions';

import {connect} from 'react-redux'

class LoginScreen extends Component {

    constructor(){
        super()
        this.state = {
            error : false,
            data : [],
            loading : false,
            email : '',
            password : ''
        }
    }

    render(){
        return(
            <View style={styles.rootContainer}>
                <StatusBar
                    backgroundColor='#fff'
                    barStyle='dark-content'
                />
                <View style={styles.headerContainer}>
                    <View style={styles.iconContainer}>

                    </View>

                    <View style={styles.titleTextContainer}>
                        <Text style={styles.titleText}>Sign In</Text>
                    </View>
                </View>

                <View style={styles.bodyContainer}>
                    <View style={styles.inputContainer}>
                        <TextInput
                            style={styles.textInputStyle}
                            placeholder='Enter your mail id'
                            onChangeText = {(text) => this.setState({email : text})}
                        />
                        <View style={styles.underLine}></View>
                    </View>

                    <View style={styles.inputContainer}>
                        <TextInput
                            style={styles.textInputStyle}
                            placeholder='Password'
                            secureTextEntry={true}     
                            onChangeText = {(text) => this.setState({password : text})}                       
                        />
                        <View style={styles.underLine}></View>
                    </View>

                    <View style={styles.signInRootContainer}>
                        <TouchableWithoutFeedback
                            onPress={()=>{
                                console.log('login clicked')
                                this.loginApiData()
                            }}
                            style={styles.signInContainer}
                            >
                            <View style={styles.btnContainer}> 
                                <Text style={styles.basicText}>SIGN IN </Text>
                            </View>
                            
                        </TouchableWithoutFeedback>

                    </View>
                </View>

            </View>
        )
    }

    loginApiData(){
        // this.props.loginApiCall({})
        if(this.isValidMailId()){
            if(this.isValidData()){
                this.props.loginApiCall({})
            }else{
                ToastAndroid.show('Mail id doesn\'t exists', ToastAndroid.SHORT)
            }            
        }else{
            ToastAndroid.show('Enter valid mail id', ToastAndroid.SHORT)
        }
    }

    isValidMailId(){
        let email = this.state.email
        var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

        if (reg.test(email) == false){
            return false;
        }
        return true;
    }

    isValidData(){
        if(this.state.email === 'user@gmail.com' && this.state.password === 'user@123'){
            return true
        }else{
            return false
        }
    }

    componentWillReceiveProps(nextProps){
        if(nextProps){
            if(nextProps.login && !nextProps.login.error){
                ToastAndroid.show('Login success ', ToastAndroid.SHORT)

                const resetAction = StackActions.reset({
                    index: 0,
                    actions: [NavigationActions.navigate({ routeName: 'homeScreen' })],
                })
                this.props.navigation.dispatch(resetAction)

                // this.props.navigation.navigate('homeScreen')
            }else{
                ToastAndroid.show('Invalid credentials', ToastAndroid.SHORT)
            }
            // console.log('componentWillReceiveProps ', nextProps)
        }
    }
}


function mapStateToProps(state) {
    return {
      ...state
    };
  }
  
  export default connect(mapStateToProps, { ...LoginActions })(LoginScreen);

const styles = StyleSheet.create({
    rootContainer : {
        flex : 1,
        alignItems : 'center',
        justifyContent : 'center',
        backgroundColor : '#fff'
    },
    btnContainer : {
        flex : 1,
        alignSelf : 'stretch',
        alignItems : 'center',
        justifyContent : 'center'
    },
    headerContainer : {
        flex : 1,
        flexDirection : 'row'
    },
    iconContainer : {
        flex : 1,
        justifyContent : 'center',
        alignItems : 'center'
    },
    titleTextContainer : {
        flex : 9,
        justifyContent : 'center',
        alignItems : 'center'
    },
    titleText : {
        color : '#000',
        fontWeight : 'bold',
        fontSize : 20
    },
    bodyContainer : {
        flex : 9,
        alignSelf : 'stretch',
        alignItems : 'center',
        justifyContent : 'center',
    },
    inputContainer : {
        alignSelf : 'stretch',
        marginLeft : 10,
        marginRight : 10,
        marginBottom : 5,
        marginTop : 5,
        paddingLeft : 5
    },
    textInputStyle : {
        fontSize : 18
    },
    underLine : {
        marginTop : 5,
        backgroundColor : '#616161',
        height : 1
    },
    signInRootContainer : {
        marginLeft : 10,
        marginRight : 10,
        marginBottom : 5,
        marginTop : 5,
        alignItems : 'center',
        justifyContent : 'center',
        backgroundColor : '#00e676',
        alignSelf : 'stretch',
        height : 50
    },
    signInContainer : {
        alignItems : 'center',
        justifyContent : 'center',
        width : '100%',
        height : '100%'
    },
    basicText : {
        color : '#fff',
        fontWeight : 'bold'
    }
})