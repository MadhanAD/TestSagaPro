import {put,all,takeEvery,call,fork} from 'redux-saga/effects'
import {get} from './../../config/api'
import {WatchListActions} from './../actions'
import {USER_URL} from './../../config/url'

function* getWatchList(action){
    
    yield put(WatchListActions.requestWatchList())

    const response = yield call(get,USER_URL)

    if(response && response.response){
        //success response 
        // console.log('WatchList saga ',response.response)
        yield put(WatchListActions.successWatchList(response.response))
    }else{
        //failure response
        yield put(WatchListActions.failedWatchList(response.error))
    }
}

export default function* WatchListSaga(){
    yield all ([fork(takeEvery,WatchListActions.WATCH_LIST,getWatchList)])
}