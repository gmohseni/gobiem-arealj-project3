import React, {useState} from 'react';
import { useDispatch } from "react-redux";
import { useHistory } from 'react-router-dom';
import NavBar from './NavBar';
import { signup } from '../actions/signup';

const initialState = { username:'', password:''};

export default function SignUp() {
    const history = useHistory();
    const dispatch = useDispatch();
    const [formData, setFormData] = useState(initialState);
    const [showPassword, setShowPassword] = useState(false);
    const [showError, setShowError] = useState(false);

    const handleSubmit = () => {
        if ((formData.username.length !== 0) && (formData.password.length !== 0)){
            dispatch(signup(formData, history));
        } else {
            setShowError(true);
        }
    }

    const onChange = (e) =>{
        setFormData({...formData, [e.target.id]: e.target.value});
    };

    return(
        <div>
            <NavBar/>
            <div className="container-fluid background">
                <div className="row">
                    <div className ="col-sm-1"></div>
                    <div className="col-sm-10">
                        <h3>Create Account</h3>
                    </div>
                    <div className ="col-sm-1"></div>
                </div>
                <div>
                    {
                        (showError) ? 
                        <div className="alert alert-danger">Please add username and password!</div>
                        :
                        <>
                        </>
                    }
                </div>
                <div className="signup">
                    <div className="row">
                    <div className ="col-sm-1">
                        </div>
                        <div className="col-sm-10">
                            <label htmlFor="username">UserName</label>
                            <input id="username" type="text" placeholder="username"
                        
                            onChange={onChange}/>
                        </div>
                        <div className ="col-sm-1"></div>
                    </div>
                    <div className="row">
                    <div className ="col-sm-1">
                        </div>
                        <div className="col-sm-10">
                            <label htmlFor="password">Password</label>
                            <input id="password" type={!showPassword ? "password" : "text"} placeholder="password"

                            onChange={onChange}/>
                            <button className="show-password-button text-white" onClick={() => setShowPassword(!showPassword)}>Show Password</button>
                        </div>
                        <div className ="col-sm-1"></div>
                    </div>
                    <div className="row">
                        <div className ="col-sm-1"></div>
                        <div className="col-sm-10 float-end">
                                <button className="submit-button text-white" onClick={() => handleSubmit()}>Submit</button>
                        </div>
                        <div className ="col-sm-1"></div>
                    </div>
                </div>
            </div>
        </div>

    )
}
