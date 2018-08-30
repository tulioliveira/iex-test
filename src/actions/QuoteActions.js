import axios from 'axios';
import { LOAD_QUOTE, RESET_QUOTE } from './types';
import { finishQuote, throwError } from './StatusActions';

/**
 * "Reset Quote" action cretor
 * @return {Object} - "Reset Quote" action
 */
export const resetQuote = () => ({ type: RESET_QUOTE });

/**
 * "Load Quote" action creator, making asynchronous request to IEX API to fetch
 * the quote data, specificaly the latest price, before dispatching the actions.
 * When the request is finished, dispatch "Quote Loading Finish" action to the
 * Status reducer. If an error is caught, dispatch it to the Status reducer as well.
 * @param {string} symbol - The company symbol
 * @return {Function} - Thunk that will make the request before dispatching the action
 */
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
