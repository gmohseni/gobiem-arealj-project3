import * as actionType from '../constants/actionTypes';


const User = (state = {authData: null, users: [], errorMessage: ""}, action) =>{
    switch(action.type){
        case actionType.AUTH:
            localStorage.setItem('profile', JSON.stringify({...action?.data}));
            return {...state, authData: action?.data};
        case actionType.LOGOUT:
            localStorage.clear();
            return {...state, authData: null};
        case actionType.UNAVAILABLE_USERNAME:
            return {...state};
        case actionType.INVALID_LOGIN:
            console.log(state.users);
            return state;
        case actionType.FETCH_USERS:
            return {...state, users: action.data};
        case actionType.ERROR:
            return {...state, errorMessage: action.errorMessage};
        case actionType.CLEARERROR:
            return {...state, errorMessage: ""};
        default:
            return state;
    }
};

export default User;
