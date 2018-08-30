import axios from 'axios';
import { LOAD_QUOTE, RESET_QUOTE } from './types';
import { finishQuote, throwError } from './StatusActions';

export const resetQuote = () => ({ type: RESET_QUOTE });

export const loadQuote = symbol => (dispatch) => {
  if (typeof symbol === 'string' && symbol.length > 0) {
    axios.get(`https://api.iextrading.com/1.0/stock/${symbol}/quote`)
      .then((response) => {
        dispatch({
          type: LOAD_QUOTE,
          payload: { latestPrice: response.data.latestPrice }
        });
        dispatch(finishQuote());
      }).catch((error) => {
        console.log(error);
        dispatch(throwError('Sorry, couldn\'t retrieve symbol data'));
      });
  }
  else {
    dispatch(resetQuote());
  }
};
