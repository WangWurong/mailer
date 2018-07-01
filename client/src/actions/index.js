// import axios lib to create ajax request
import axios from 'axios';
// import the types
import { FETCH_USER } from './types';

export const fetchUser = () => async dispatch => {
  const res = await axios.get('/api/current_user');
  dispatch({ type: FETCH_USER, payload: res.data });
};

export const handleToken = token => async dispatch => {
  const res = await axios.post('/api/stripe', token);
  debugger;
  dispatch({ type: FETCH_USER, payload: res.data });
};
