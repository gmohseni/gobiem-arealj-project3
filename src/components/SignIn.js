import React, {useEffect, useState} from 'react';
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from 'react-router-dom';
import NavBar from './NavBar';
import { signin } from '../actions/signin';
// import { fetchUsers } from '../actions/signin';
import { CLEARERROR } from '../constants/actionTypes';

export default function SignIn() {
    const users = useSelector(state => state.user.users);
    const history = useHistory();
    const dispatch = useDispatch();
    const [formData, setFormData] = useState({username:'', password:''});
    const [showPassword, setShowPassword] = useState(false);
    const errorMessage = useSelector(state => state?.user?.errorMessage);
    const [error, setError] = useState(false);


    useEffect(() => {
        if (errorMessage.length > 0){
            setError(true);
        }
     },[errorMessage]);

    const handleSubmit = () => {

        dispatch(signin(formData, history));
        setTimeout(() => {
            clear();
        }, 4000);
    }

    const onChange = (e) =>{
        setFormData({...formData, [e.target.id]: e.target.value});
    };

    const clear = () => {
        setFormData({username: '', password: ''});
        setError(false);
        dispatch({type: CLEARERROR});
    }

    return(
        <div>
            <NavBar/>
            <div className="container-fluid background">
                <div className="row">
                    <div className ="col-sm-1"></div>
                    <div className="col-sm-10">
                        <h3>Login</h3>
                    </div>
                    <div className ="col-sm-1"></div>
                </div>
                <div className="row">
                    <div className ="col-sm-2"></div>
                    <div className ="col-sm-8">
                    <div>
                            {
                                (error) ?
                                <div className="alert alert-danger">{errorMessage}</div>
                                :
                                <>
                                </>
                            }
                        </div>
                    </div>
                    <div className ="col-sm-2"></div>
                </div>
                <div className="login">
                    <div className="row">
                    <div className ="col-sm-1">
                        </div>
                        <div className="col-sm-10">
                            <label htmlFor="username">UserName</label>
                            <input id="username" type="text" placeholder="username"
                            value={formData.username}
                            onChange={(e) => onChange(e)}/>
                        </div>
                        <div className ="col-sm-1"></div>
                    </div>
                    <div className="row">
                    <div className ="col-sm-1">
                        </div>
                        <div className="col-sm-10">
                            <label htmlFor="password">Password</label>
                            <input id="password" placeholder="password" type={!showPassword ? "password" : "text"}
                            value={formData.password}
                            onChange={(e) => onChange(e)}/>
                            <button className="show-password-button text-white" onClick={() => setShowPassword(!showPassword)}>Show Password</button>
                        </div>
                        <div className ="col-sm-1"></div>
                    </div>
                    <div className="row">
                        <div className ="col-sm-1"></div>
                        <div className="col-sm-10 float-end">
                                <button className="submit-button text-white" disabled={formData.username.length === 0 || formData.password.length ===0} onClick={() => handleSubmit()}>Submit</button>
                                <button className="clear-button text-white" onClick={() => clear()}>Clear</button>
                        </div>
                        <div className ="col-sm-1"></div>
                    </div>
                </div>
            </div>
        </div>

    )
}
