import { combineReducers } from 'redux';
import posts from './posts';
import user from './user';
import login from './login';

export default combineReducers({posts, user, login});
