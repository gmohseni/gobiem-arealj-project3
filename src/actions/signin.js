import * as api from '../api';

import { AUTH, FETCH_USERS, INVALID_LOGIN } from '../constants/actionTypes';

export const signin = (formData, history) => async (dispatch) => {
    try {
      const { data } = await api.signIn(formData);
      dispatch({ type: AUTH, data })
      history.push('/');
    } catch (error) {
      // dispatch({type: INVALID_LOGIN});
      if (error.response) {
        console.log(error.response.data);
        // dispatch({type: INVALID_LOGIN});
        // console.log(error.response.status);
        // console.log(error.response.headers);
    }
    }
  };

export const fetchUsers = () => async (dispatch) => {
  try {
    const { data } = await api.fetchUsers();
    console.log(data);
    dispatch({ type: FETCH_USERS, data })
  } catch (error) {
    dispatch({type: INVALID_LOGIN});
  }
};
