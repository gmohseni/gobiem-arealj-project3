import React, {useState, useEffect} from 'react';
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from 'react-router-dom';
import NavBar from './NavBar';
import { signup } from '../actions/signup';


export default function SignUp() {
    const history = useHistory();
    const dispatch = useDispatch();
    const [formData, setFormData] = useState({ username:'', password:''});
    const [showPassword, setShowPassword] = useState(false);
    // const [submitError, setSubmitError] = useState(false);
    const [success, setSuccess] = useState({currentSuccess: 0});
    const userState = useSelector(state => state.user);
    const [currentUser, setCurrentUser] = useState({username:'', password:''});
    
    const [flag, setFlag] = useState(false);

    const user = JSON.parse(localStorage.getItem('profile'));
    // console.log(user);
    // console.log(user);
    const handleSubmit = () => {

        setFlag(true);
        let user = {}
        dispatch(signup(formData, history)).then((response) =>  {
            user = JSON.parse(localStorage.getItem('profile'));
            // const user = JSON.parse(localStorage.getItem('profile'));
            // console.log(user);
        })
        console.log(user);
            // const user = JSON.parse(localStorage.getItem('profile'));
            // console.log(user);
            
           

        
        // const user = JSON.parse(localStorage.getItem('profile'));
        // setCurrentUser({username: user.result.username, password: user.result.password});
        // console.log(user);
        
        //setSubmitError(true);
        // if ((formData.username.length !== 0) && (formData.password.length !== 0)){
        //     dispatch(signup(formData, history)).then((response) =>{
        //         const user = JSON.parse(localStorage.getItem('profile'));
        //         if (user){
        //             console.log(user);
        //             // console.log(response);

        //             setSuccess({currentSuccess: success + 1});
        //             console.log(success);    
        //         }
        //     });
            
            // console.log(userState);
        // } else {
            // console.log(this.props.authData);
            // setSubmitError(true);
        // }
        // setTimeout(() => {
        //     clear();
        // }, 3000);
    }

    useEffect(() =>{
        const checkLocal = JSON.parse(localStorage.getItem('profile'));
        // console.log(checkLocal);
        if (checkLocal){
            setCurrentUser({username: checkLocal.result.username, password: checkLocal.result.password});
            // console.log(currentUser);
        }
        console.log(flag);
    },[flag])


    const onChange = (e) =>{
        setFormData({...formData, [e.target.id]: e.target.value});
    };

    const clear = () => {
        setFormData({username: '', password: ''});
        // setSubmitError(false);
    }

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
                        {/* <div>
                            {
                                (submitError && user === null) ?
                                <div className="alert alert-danger">Username is taken or a field is missing, please correct and try again!</div>
                                :
                                <>
                                </>
                            }
                        </div> */}
                    </div>
                    <div className ="col-sm-2"></div>
                </div>
                <div className="signup">
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
                            <input id="password" type={!showPassword ? "password" : "text"} placeholder="password"
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
