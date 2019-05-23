export const SHOW_ERROR = 'users:showError';

export function showError(){
       return{
        type: SHOW_ERROR,
        payload: {
            users: 'ERROR..'
        }
    }
}