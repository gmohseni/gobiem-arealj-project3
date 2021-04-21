import * as api from '../api';
import { AUTH, UNAVAILABLE_USERNAME } from '../constants/actionTypes';

export const signup = (formData, history) => async (dispatch) => {
  try {
      const { data } = await api.signUp(formData);
      dispatch({type: AUTH, data });
      history.push('/');
    } catch (error) {
      dispatch({type: UNAVAILABLE_USERNAME});
  }
};

  
