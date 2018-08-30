import axios from 'axios';
import { LOAD_COMPANY, RESET_COMPANY } from './types';
import { finishCompany, throwError } from './StatusActions';

export const resetCompany = () => ({ type: RESET_COMPANY });

export const loadCompany = symbol => (dispatch) => {
  if (typeof symbol === 'string' && symbol.length > 0) {
    axios.get(`https://api.iextrading.com/1.0/stock/${symbol}/company`)
      .then((response) => {
        dispatch({
          type: LOAD_COMPANY,
          payload: response.data
        });
        dispatch(finishCompany());
      }).catch((error) => {
        console.log(error);
        dispatch(throwError());
      });
  }
  else {
    dispatch(resetCompany());
  }
};
