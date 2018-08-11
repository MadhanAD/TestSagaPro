import {LoginActions} from './../actions'

const initialState = {
    loading : false,
    data : [],
    error : false
}

export default function(state=initialState,action){

    switch(action.type){
        case LoginActions.LOGIN_REQUEST:
            return {
                ...state
            }
        case LoginActions.LOGIN_SUCCESS:
            return {
                loading : false,
                error : false,
                
            }
        case LoginActions.LOGIN_FAILED:
            return {
                loading : false,
                error : true
            }
        default:
            return state
    }
}