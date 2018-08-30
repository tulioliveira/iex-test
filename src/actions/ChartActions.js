import axios from 'axios';
import { LOAD_CHART, RESET_CHART } from './types';

export const resetChart = () => ({ type: RESET_CHART });

export const loadChart = (symbol, range) => (dispatch) => {
  if (typeof symbol === 'string' && symbol.length > 0) {
    axios.get(`https://api.iextrading.com/1.0/stock/${symbol}/chart/${range}`)
      .then((response) => {
        dispatch({
          type: LOAD_CHART,
          payload: { data: response.data, selectedRange: range }
        });
      }).catch((error) => {
        console.log(error);
      });
  }
  else {
    dispatch(resetChart());
  }
};
