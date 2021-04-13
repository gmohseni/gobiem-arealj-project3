import React, {useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import NavBar from './NavBar';
import { LOGIN_STATE } from "../reducers/storeConstants";

let editingBegun = false;

export default function Login() {
    const [username, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const loginState = useSelector(state => state.login);

    const dispatch = useDispatch();

    console.log(loginState);
    console.log(editingBegun);

    const handleLogin = () => {
        //dispatch(validateUser(username, password));
        clearForm();
    }

    const clearForm = () => {
        editingBegun = false;
        setUserName("");
        setPassword("");
    }

    return(
        <div>
             <div>
                <NavBar/>
            </div>
            <div>
                <>
                {
                    !editingBegun && loginState === LOGIN_STATE.INVALID_LOGIN &&
                    <div className="alert alert-danger">Invalid username / password! Please try again.</div>
                }
                {
                    !editingBegun && loginState === LOGIN_STATE.NETWORK_ERROR &&
                    <div className="alert alert-danger">Unable to connect to the server. Please check your internet connection.</div>
                }
                <div className="row">
                    <div className ="col-sm-1">
                    </div>
                    <div className="col-sm-10">
                        <h3>Login</h3>
                    </div>
                    <div className ="col-sm-1"></div>
                </div>
                <div className="row">
                <div className ="col-sm-1">
                    </div>
                    <div className="col-sm-10">
                        <label htmlFor="username">UserName:</label>
                        <input id="username" type="text" placeholder="UserName" 
                        value={username} 
                        onChange={e => {editingBegun = true; setUserName(e.target.value);}}/>
                    </div>
                    <div className ="col-sm-1"></div>
                </div>
                <div className="row">
                <div className ="col-sm-1">
                    </div>
                    <div className="col-sm-10">
                        <label htmlFor="password">Password:</label>
                        <input id="password" type="text" placeholder="Password"
                        value={password} 
                        onChange={e => {editingBegun = true; setPassword(e.target.value);}}/>
                    </div>
                    <div className ="col-sm-1"></div>
                </div>
                <div className="row">
                    <div className ="col-sm-1"></div>
                    <div className="col-sm-10 float-end">
                            <button onClick={() => handleLogin()}>Login</button>
                    </div>
                    <div className ="col-sm-1"></div>
                </div>
                </>
            </div>
        </div>

    )
}


