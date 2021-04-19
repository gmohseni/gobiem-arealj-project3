import * as api from '../api';

import { AUTH } from '../constants/actionTypes';

export const signin = (formData, history) => async (dispatch) => {
  
    try {
      const { data } = await api.signIn(formData);
      
      //once we get the data
      dispatch({ type: AUTH, data })
  
      history.push('/');
    } catch (error) {
      console.log(error);
    }
  };