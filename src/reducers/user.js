const User = (state = {}, action) => {
    switch (action.type) {
        case 'LOGIN_SUCCESS':
            return action.payload.user;
        case 'LOGOUT':
            return {};
        default:
            return state;
    }
}

export default User;
