import * as api from '../api';
import { AUTH, ERROR, UNAVAILABLE_USERNAME } from '../constants/actionTypes';

export const signup = (formData, history) => async (dispatch) => {
  try {
      const { data } = await api.signUp(formData);
      dispatch({type: AUTH, data: data });
      history.push('/');
    } catch (error) {
      if (error.response) {
      const errorMessage = error.response.data.message  // Dispatch this to update error message in the user reducer.
        dispatch({type: ERROR, errorMessage: errorMessage})
        console.log(errorMessage);
  }
}
};

  
