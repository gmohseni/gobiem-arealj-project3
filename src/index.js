import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createStore, applyMiddleware, compose} from 'redux';
import HomePage from './components/HomePage';
import Post from './components/Post';
import CreatePost from './components/CreatePost';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import thunk from 'redux-thunk';
import reducers from './reducers';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunk)));

ReactDOM.render(
  <Provider store={store}>

  <Router>
     <Switch>
       <Route exact path={"/"} component={App}/>
       <Route exact path={"/home"} component={HomePage}/>
       <Route exact path={"/signin"} component={SignIn}/>
       <Route exact path={"/signup"} component={SignUp}/>
       <Route exact path={"/createpost"} component={CreatePost}/>
       <Route exact path={"/updatepost/:id"} component={CreatePost}/>
       <Route exact path={"/signup"} component={SignUp}/>
       <Route exact path={"/post/:id"} component={Post}/>
       <Route exact path={"/post/:id/:commentId"} component={Post}/>
       <Route render={() => <h1>Not found!</h1>} />
     </Switch>
   </Router>
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

// ReactDOM.render(
//   <Router>
//     <Switch>
//       <Route exact path={"/"} component={App}/>
//       <Route exact path={"/home"} component={Home}/>
//       <Route exact path={"/login"} component={Login}/>
//       <Route exact path={"/signup"} component={SignUp}/>
//       <Route exact path={"/createpost"} component={CreatePost}/>
//       <Route exact path={"/threads"} component={Threads}/>
//       <Route render={() => <h1>Not found!</h1>} />
//     </Switch>
//   </Router>
  
//   ,document.getElementById('root')
// );
