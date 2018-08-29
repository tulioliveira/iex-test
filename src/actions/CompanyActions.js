import axios from 'axios';
import { LOAD_COMPANY, RESET_COMPANY } from './types';

export const loadCompany = symbol => (dispatch) => {
  axios.get(`https://api.iextrading.com/1.0/stock/${symbol}/company`)
    .then((response) => {
      const { data } = response;

      if (data === 'Unknown symbol') {
        dispatch({
          type: LOAD_COMPANY,
          payload: { error: 'Company symbol not found!' }
        });
      }
      else {
        dispatch({
          type: LOAD_COMPANY,
          payload: data
        });
      }
    }).catch((error) => {
      console.log(error);
    });
};

export const resetCompany = () => ({ type: RESET_COMPANY });
