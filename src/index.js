import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';
import App from './App';
import Home from './components/HomePage';
import Login from './components/Login';
import SignUp from './components/SignUp';
import CreatePost from './components/CreatePost';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


ReactDOM.render(
  <Router>
    <Switch>
      <Route exact path={"/"} component={App}/>
      <Route exact path={"/home"} component={Home}/>
      <Route exact path={"/login"} component={Login}/>
      <Route exact path={"/signup"} component={SignUp}/>
      <Route exact path={"/createpost"} component={CreatePost}/>
      <Route render={() => <h1>Not found!</h1>} />
    </Switch>
  </Router>
  
  ,document.getElementById('root')
);
