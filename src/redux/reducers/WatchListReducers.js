import { WatchListActions } from './../actions'


const initialState = {
    payload : [],
    error : false,
    loading : false
}

export default function(state=initialState,action){
    switch(action.type) {
        case WatchListActions.WATCH_LIST_REQUEST:
            return {
                error : false,
                loading : true,
                payload : []
            }
        case WatchListActions.WATCH_LIST_SUCCESS:
            return {
                error : false,
                loading : false,
                payload : action.payload.data
            }
        case WatchListActions.WATCH_LIST_FAILED:
            return {
                error : false,
                loading : false,
                payload : []
            }
        default:
            return state
    }
}