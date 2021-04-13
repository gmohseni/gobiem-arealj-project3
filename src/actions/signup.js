import * as api from '../api';

export const createUser = (username, password) => async (dispatch) =>{
    try{
        const { data } = await api.createUser(username, password);
        dispatch({type: 'LOGIN_SUCCESS', payload: data});
    } catch (error){
        console.log(error);
        
    }
}
