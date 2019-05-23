import * as $ from 'jquery';
import { showError} from '../actions/showError';

export function apiRequest() {
    return dispatch => {
        $.ajax({
            url: 'http://google.com',
            success(){
                console.log('success');
            },
            error(){
                console.log('error');
                dispatch(showError())
            }
        });
    }
}