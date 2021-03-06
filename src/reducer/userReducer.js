import {UPDATE_USER} from '../actions/userActions'
import {SHOW_ERROR} from '../actions/showError'

export default function userReducer(state = '', {type, payload}){
    switch(type){
        case UPDATE_USER:
            return payload.users ;
        case SHOW_ERROR:
            return payload.users;
        default: return state;
    }

}