import React, {useState} from 'react';
import { useDispatch } from "react-redux";
import { useHistory } from 'react-router-dom';
import NavBar from './NavBar';
import { signin } from '../actions/signin';


const initialState = { username:'', password:''};
export default function SignIn() {
    const history = useHistory();

    const dispatch = useDispatch();
    const [formData, setFormData] = useState(initialState);
    const [showPassword, setShowPassword] = useState(false);

    const handleSubmit = () => {
        dispatch(signin(formData, history));
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
                        <h3>Login</h3>
                    </div>
                    <div className ="col-sm-1"></div>
                </div>
                <div className="login">
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
                            <input id="password" type="object" placeholder="password" type={!showPassword ? "password" : "text"}
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
