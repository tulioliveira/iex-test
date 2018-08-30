import axios from 'axios';
import { LOAD_CHART, RESET_CHART } from './types';
import { finishChart, throwError } from './StatusActions';

/**
 * "Reset Chart" action cretor
 * @return {Object} - "Reset Chart" action
 */
export const resetChart = () => ({ type: RESET_CHART });

/**
 * "Load Chart" action creator, making asynchronous request to IEX API to fetch
 * the chart data before dispatching the actions. When the request is finished,
 * dispatch "Chart Loading Finish" action to the Status reducer. If an error is
 * caught, dispatch it to the Status reducer as well.
 * @param {string} symbol - The company symbol
 * @param {string} range - The data time interval
 * @return {Function} - Thunk that will make the request before dispatching the action
 */
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
