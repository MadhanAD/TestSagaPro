import {put,all,takeEvery,call,fork} from 'redux-saga/effects'
import {get} from './../../config/api'
import {WatchListActions} from './../actions'

function* getAllWatchList(action){
    yield put(WatchListActions.requestWatchList)

    const response = yield call(get(action.method))

    if(response && response.response){
        //success response 
        yield put(WatchListActions.successWatchList(response.response))
    }else{
        //failure response
        yield put(WatchListActions.failedWatchList(response.error))
    }
}

export default function* WatchListSaga(){
    yield all([fork(takeEvery,WatchListActions.WATCH_LIST_REQUEST,getAllWatchList)])
}