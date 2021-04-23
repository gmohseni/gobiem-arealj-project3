import * as api from '../api';

import { AUTH, ERROR } from '../constants/actionTypes';

export const signin = (formData, history) => async (dispatch) => {
    try {
      const { data } = await api.signIn(formData);
      dispatch({ type: AUTH, data })
      history.push('/');
    } catch (error) {
      if (error.response) {
      const errorMessage = error.response.data.message  // Dispatch this to update error message in the user reducer.
        dispatch({type: ERROR, errorMessage: errorMessage})
        console.log(errorMessage);
  }
    }
  };
