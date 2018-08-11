import {WatchListActions} from './../actions'


const initialState = {

}

export default function(state=initialState,action){
    switch(action.type) {
        case WatchListActions.WATCH_LIST_REQUEST:
            return {

            }
        case WatchListActions.WATCH_LIST_SUCCESS:
            return {

            }
        case WatchListActions.WATCH_LIST_FAILED:
            return {

            }
        default:
            return state
    }
}