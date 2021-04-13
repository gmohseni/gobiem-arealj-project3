import {LOGIN_STATE} from "./storeConstants";

const Login = (state=LOGIN_STATE.LOGGED_IN, action) => {
    switch (action.type) {
        case 'LOGIN_SUCCESS':
            return { loginState: LOGIN_STATE.LOGGED_IN }
        case 'INVALID_LOGIN':
            return {loginState: LOGIN_STATE.INVALID_LOGIN }
        case 'LOGIN_NETWORK_ERROR':
            return {loginState: LOGIN_STATE.NETWORK_ERROR }
        case 'LOGOUT':
            return {loginState: LOGIN_STATE.LOGGED_OUT }
        default:
            return state;
    }
}

export default Login;
