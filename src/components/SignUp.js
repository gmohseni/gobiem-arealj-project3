import React, {useState} from 'react';
import {useDispatch} from "react-redux";
import NavBar from './NavBar';


export default function SignUp() {
    const [username, setUserName] = useState("");
    const [password, setPassword] = useState("");

    const dispatch = useDispatch();

    console.log(username);
    console.log(password);

    const handleSignUp = () => {
        //dispatch(signUp(username, password));
        clearForm();
    }

    const clearForm = () => {
        setUserName("");
        setPassword("");
    }

    return(

        <div>
            <div>
                <NavBar/>
            </div>
            <div className="row">
                <div className ="col-sm-1">
                </div>
                <div className="col-sm-10">
                    <h3>Create Account</h3>
                </div>
                <div className ="col-sm-1"></div>
            </div>
            <div className="row">
            <div className ="col-sm-1">
                </div>
                <div className="col-sm-10">
                    <label htmlFor="username">UserName</label>
                    <input id="username" type="text" placeholder="UserName"
                    value={username} 
                    onChange={e => setUserName(e.target.value)}/>
                </div>
                <div className ="col-sm-1"></div>
            </div>
            <div className="row">
            <div className ="col-sm-1">
                </div>
                <div className="col-sm-10">
                    <label htmlFor="password">Password</label>
                    <input id="password" type="text" placeholder="Password"
                    value={password} 
                    onChange={e => setPassword(e.target.value)}/>
                </div>
                <div className ="col-sm-1"></div>
            </div>
            <div className="row">
            <div className ="col-sm-1"></div>
            <div className="col-sm-10 float-end">
                    <button onClick={() => handleSignUp()}>Submit</button>
            </div>
            <div className ="col-sm-1"></div>
        
            </div>
        </div>

    )
}
