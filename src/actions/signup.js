import * as api from '../api';
// import { LOGIN_STATE } from '../reducers/storeConstants';

import { AUTH } from '../constants/actionTypes';


export const signup = (formData, history) => async (dispatch) => {
   
  try {
      
      const { data } = await api.signUp(formData);
      //pass data to reducer
      dispatch({type: AUTH, data });
  
      history.push('/');
    } catch (error) {
      console.log(error);
    }
  };

  
