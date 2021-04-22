import * as api from '../api';
import { AUTH, UNAVAILABLE_USERNAME } from '../constants/actionTypes';

export const signup = (formData, history) => async (dispatch) => {
  try {
      const { data } = await api.signUp(formData);
      dispatch({type: AUTH, data: data });
      // console.log("hellooo");
      // console.log(data);
      history.push('/');
    } catch (error) {
      // dispatch({type: UNAVAILABLE_USERNAME});
      if (error.response) {
        console.log("HELLO");
        console.log(error.response.data.message); // Dispatch this to update error message in the user reducer.
  }
}
};

  
