import { combineReducers } from 'redux';
import posts from './posts';
import post from './post';
import comments from './comments';
import user from './user';

export default combineReducers({posts, post, comments, user});
