import axios from 'axios';
import { LOAD_COMPANY, RESET_COMPANY } from './types';
import { finishCompany, throwError } from './StatusActions';

/**
 * "Reset Company" action cretor
 * @return {Object} - "Reset Company" action
 */
export const resetCompany = () => ({ type: RESET_COMPANY });

/**
 * "Load Company" action creator, making asynchronous request to IEX API to fetch
 * the company data before dispatching the actions. When the request is finished,
 * dispatch "Company Loading Finish" action to the Status reducer. If an error is
 * caught, dispatch it to the Status reducer as well.
 * @param {string} symbol - The company symbol
 * @return {Function} - Thunk that will make the request before dispatching the action
 */
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
        dispatch(throwError('Sorry, couldn\'t retrieve symbol data'));
      });
  }
  else {
    dispatch(resetCompany());
  }
};
