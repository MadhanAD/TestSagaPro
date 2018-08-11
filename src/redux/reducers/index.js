import {combineReducers} from 'redux'


import LoginReducers from './LoginReducers'
import WatchListReducers from './WatchListReducers'

const appReducers = combineReducers(
    {
        login : LoginReducers,
        watchList : WatchListReducers
    }
)

const rootReducers = (state,action) => {
    return appReducers(state,action)
}

export default rootReducers