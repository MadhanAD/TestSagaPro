import {all,fork} from 'redux-saga/effects'

import LoginSaga from './LoginSaga'
import WatchListSaga from './WatchListSaga'

export default function* rootSaga(){
    yield all([fork(LoginSaga)])
    yield all([fork(WatchListSaga)])
}