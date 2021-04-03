import React from 'react';
import NavBar from './NavBar';


function SignUp() {
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
                    <label htmlFor="Username">UserName</label>
                    <input id="Username" type="text" placeholder="UserName"></input>
                </div>
                <div className ="col-sm-1"></div>
            </div>
            <div className="row">
            <div className ="col-sm-1">
                </div>
                <div className="col-sm-10">
                    <label htmlFor="Password">Password</label>
                    <input id="Password" type="text" placeholder="Password"></input>
                </div>
                <div className ="col-sm-1"></div>
            </div>
            <div className="row">
            <div className ="col-sm-1"></div>
            <div className="col-sm-10 float-end">
                    <button>Submit</button>
            </div>
            <div className ="col-sm-1"></div>
        
            </div>
        </div>

    )
}

export default SignUp;