import {all,takeEvery,put, fork,call,takeLatest} from 'redux-saga/effects'
import {LoginActions} from './../actions'
import {LOGIN} from './../../config/url'
import {post} from './../../config/api'


function* loginApiCall(action){

    yield put(LoginActions.loginRequest)

    const payload = {
        email : 'peter@klaven',
        password : 'cityslicka'
    }

    const response = yield call(post(LOGIN,payload))

    if(response){
        //valid response
        // yield put(LoginActions.loginSuccess(action.data))
    }else{
        //invalid response
        // yield put(LoginActions.loginFailed(action.data))
    }
}


export default function* LoginSaga(){
    yield all ([fork(takeLatest,LoginActions.LOGIN,loginApiCall)])
}