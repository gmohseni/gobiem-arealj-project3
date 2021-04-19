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

    
    const handleSubmit = () => {
        dispatch(signin(formData, history));
        
    }

    const onChange = (e) =>{

        setFormData({...formData, [e.target.id]: e.target.value});
        console.log(e.target.value);
        
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
                    <h3>Login</h3>
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
