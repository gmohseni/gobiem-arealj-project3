import React, {useState, useEffect} from 'react';
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from 'react-router-dom';
import NavBar from './NavBar';
import { signup } from '../actions/signup';
import { CLEARERROR } from '../constants/actionTypes';


export default function SignUp() {
    const history = useHistory();
    const dispatch = useDispatch();
    const [formData, setFormData] = useState({ username:'', password:''});
    const [showPassword, setShowPassword] = useState(false);

    const authData = useSelector(state => state?.user?.authData);
    const errorMessage = useSelector(state => state?.user?.errorMessage);
    const [error, setError] = useState(false);
    
     useEffect(() => {
        if (errorMessage.length > 0){
            setError(true);
        }
     },[authData, errorMessage]);


    const handleSubmit = () => {
        dispatch(signup(formData, history));
        setTimeout(() => {
            clear();
        }, 4000);
    }

    const clear = () => {
        setFormData({username: '', password: ''});
        setError(false);
        dispatch({type: CLEARERROR});
        
    };

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
                <div className="signup">
                    <div className="row">
                    <div className ="col-sm-1">
                        </div>
                        <div className="col-sm-10">
                            <label htmlFor="username">UserName</label>
                            <input id="username" type="text" required placeholder="username"
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
                            <input id="password" type={!showPassword ? "password" : "text"} placeholder="password"
                            value={formData.password}
                            onChange={(e) => onChange(e)} required="required"/>
                            <button type="button" className="btn show-password-button text-white" onClick={() => setShowPassword(!showPassword)}>Show Password</button>
                        </div>
                        <div className ="col-sm-1"></div>
                    </div>
                    <div className="row">
                        <div className ="col-sm-1"></div>
                        <div className="col-sm-10 float-end">
                                <button type="button" className="btn submit-button text-white" disabled={formData.username.length === 0 || formData.password.length ===0} onClick={() => handleSubmit()}>Submit</button>
                                <button type="button" className="btn clear-button text-white" onClick={() => clear()}>Clear</button>
                        </div>
                        <div className ="col-sm-1"></div>
                    </div>
                </div>
            </div>
        </div>

    )
}
