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

    // console.log(username);
    // console.log(password);

    const handleSubmit = () => {
        dispatch(signup(formData, history));
    }

    const onChange = (e) =>{

        setFormData({...formData, [e.target.id]: e.target.value});
        console.log(e.target.value);
        console.log(setFormData);

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
                    <input id="password" type="object" placeholder="password"
                  
                    onChange={onChange}/>
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
