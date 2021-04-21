import * as actionType from '../constants/actionTypes';


const User = (state = {authData: null, users: []}, action) =>{
    switch(action.type){
        case actionType.AUTH:
            console.log(action?.data);
            localStorage.setItem('profile', JSON.stringify({...action?.data}));
            return {...state, authData: action?.data};
        case actionType.LOGOUT:
            localStorage.clear();
            return {...state, authData: null};
        case actionType.UNAVAILABLE_USERNAME:
            return {...state};
        case actionType.INVALID_LOGIN:
            return state;
        case actionType.FETCH_USERS:
            return {...state, users: action.data};
        default:
            return state;
    }
};

export default User;
