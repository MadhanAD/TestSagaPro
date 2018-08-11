import {all,takeEvery,put, fork,call,takeLatest} from 'redux-saga/effects'
import {LoginActions} from './../actions'
import {LOGIN} from './../../config/url'
import {POST} from './../../config/api'

function* loginApiCall(action){

    // console.log('login saga success ')

    try{

        yield put(LoginActions.loginRequest())

        const payload = {
            email : 'peter@klaven',
            password : 'cityslicka'
        }

        const response = yield call(POST,LOGIN,payload)
        // console.log('login saga success ',response)
        if(response){
            //valid response
            yield put(LoginActions.loginSuccess(action.data))
        }else{
            //invalid response
            yield put(LoginActions.loginFailed(action.data))
        }
    }catch(error){
        yield put(LoginActions.loginFailed(action.data))
    }
}


export default function* LoginSaga(){
    yield all ([fork(takeEvery,LoginActions.LOGIN,loginApiCall)])
}