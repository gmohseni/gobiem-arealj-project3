import React, {useEffect, useState} from 'react';
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from 'react-router-dom';
import NavBar from './NavBar';
import { signin } from '../actions/signin';
import { fetchUsers } from '../actions/signin';

export default function SignIn() {
    const users = useSelector(state => state.user.users);
    const [allUsers, setAllUsers] = useState([]);
    const history = useHistory();

    const dispatch = useDispatch();
    const [formData, setFormData] = useState({username:'', password:''});
    const [showPassword, setShowPassword] = useState(false);
    const [submitError, setSubmitError] = useState(false);

    console.log(allUsers);

    useEffect(() => {
        dispatch(fetchUsers());
    }, [dispatch]);

    useEffect(() => {
        if (users) {
            setAllUsers(users);
        }
    }, [users, setAllUsers])

    const checkUserName = (user) => {
        for (var i = 0; i < allUsers.length; i++) {
            if (allUsers[i].username === user) {
                return true;
            }
        }
    }

    const handleSubmit = () => {
        dispatch(signin(formData, history));
        // if (!checkUserName(formData.username)) {
        //     dispatch(signin(formData, history));
        // } else {
        //     setSubmitError(true);
        // }
        setTimeout(() => {
            clear();
        }, 3000);
    }

    const onChange = (e) =>{
        setFormData({...formData, [e.target.id]: e.target.value});
    };

    const clear = () => {
        setFormData({username: '', password: ''});
        setSubmitError(false);
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
                                (submitError) ?
                                <div className="alert alert-danger">Invalid username or password, please correct and try again!</div>
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
                                <button className="submit-button text-white" onClick={() => handleSubmit()}>Submit</button>
                                <button className="clear-button text-white" onClick={() => clear()}>Clear</button>
                        </div>
                        <div className ="col-sm-1"></div>
                    </div>
                </div>
            </div>
        </div>

    )
}
