import React, {useState} from 'react';
import { useDispatch } from "react-redux";
import { useHistory } from 'react-router-dom';
import NavBar from './NavBar';
import { signup } from '../actions/signup';


// export default function SignUp() {
//     const [username, setUserName] = useState("");
//     const [password, setPassword] = useState("");

//     const dispatch = useDispatch();

//     console.log(username);
//     console.log(password);

//     const handleSignUp = () => {
//         //dispatch(signUp(username, password));
//         clearForm();
//     }

//     const clearForm = () => {
//         setUserName("");
//         setPassword("");
//     }

//     return(

//         <div>
//             <div>
//                 <NavBar/>
//             </div>
//             <div className="row">
//                 <div className ="col-sm-1">
//                 </div>
//                 <div className="col-sm-10">
//                     <h3>Create Account</h3>
//                 </div>
//                 <div className ="col-sm-1"></div>
//             </div>
//             <div className="row">
//             <div className ="col-sm-1">
//                 </div>
//                 <div className="col-sm-10">
//                     <label htmlFor="username">UserName</label>
//                     <input id="username" type="text" placeholder="UserName"
//                     value={username} 
//                     onChange={e => setUserName(e.target.value)}/>
//                 </div>
//                 <div className ="col-sm-1"></div>
//             </div>
//             <div className="row">
//             <div className ="col-sm-1">
//                 </div>
//                 <div className="col-sm-10">
//                     <label htmlFor="password">Password</label>
//                     <input id="password" type="text" placeholder="Password"
//                     value={password} 
//                     onChange={e => setPassword(e.target.value)}/>
//                 </div>
//                 <div className ="col-sm-1"></div>
//             </div>
//             <div className="row">
//             <div className ="col-sm-1"></div>
//             <div className="col-sm-10 float-end">
//                     <button onClick={() => handleSignUp()}>Submit</button>
//             </div>
//             <div className ="col-sm-1"></div>
        
//             </div>
//         </div>

//     )
// }

// const initialStateUsername = { username: ''};
// const initialStatePassword = { password: ''};
const initialState = { username:'', password:''};
export default function SignUp() {
    // const [username, setUserName] = useState(initialStateUsername);
    // const [password, setPassword] = useState(initialStatePassword);
    const history = useHistory();
    // console.log(history);
    // const [formData, setFormData] = useState(initialState);
    const dispatch = useDispatch();
    const [formData, setFormData] = useState(initialState);
    const [showPassword, setShowPassword] = useState(false);
    const [showError, setShowError] = useState(false);
   

    const handleSubmit = () => {

        if ((formData.username.length !== 0) && (formData.password.length !== 0)){
            dispatch(signup(formData, history));
        }
        else{
            setShowError(true);

        }
        
    }

    const onChange = (e) =>{

        setFormData({...formData, [e.target.id]: e.target.value});

    };


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
            <div>
                {
                    (showError) ? 
                    <div>Please add username and password</div>
                    :
                    <>
                    </>
                }
            </div>
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
                    <button onClick={() => setShowPassword(!showPassword)}>Show Password</button>
                </div>
                <div className ="col-sm-1"></div>
            </div>
            <div className="row">
            <div className ="col-sm-1"></div>
            <div className="col-sm-10 float-end">
                    <button onClick={() => handleSubmit()}>Submit</button>
            </div>
            <div className ="col-sm-1"></div>
        
            </div>
        </div>

    )
}
