import * as actionType from '../constants/actionTypes';


const User = (state = {authData: null}, action) =>{
    switch(action.type){
        case actionType.AUTH:
            console.log(action?.data)
            // console.log(action.data);
            localStorage.setItem('profile', JSON.stringify({...action?.data}));
            return {...state, authData: action?.data};
        case actionType.LOGOUT:
            localStorage.clear();
            return {...state, authData: null};
        default:
            return state;
    }
};

export default User;
