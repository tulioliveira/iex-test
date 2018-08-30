import axios from 'axios';
import { LOAD_CHART, RESET_CHART } from './types';
import { finishChart, throwError } from './StatusActions';

export const resetChart = () => ({ type: RESET_CHART });

export const loadChart = (symbol, range) => (dispatch) => {
  if (typeof symbol === 'string' && symbol.length > 0) {
    axios.get(`https://api.iextrading.com/1.0/stock/${symbol}/chart/${range}`)
      .then((response) => {
        dispatch({
          type: LOAD_CHART,
          payload: { data: response.data, selectedRange: range }
        });
        dispatch(finishChart());
      }).catch((error) => {
        console.log(error);
        dispatch(throwError('Sorry, couldn\'t retrieve symbol data'));
      });
  }
  else {
    dispatch(resetChart());
  }
};
