import {
  START_LOADING,
  FINISH_QUOTE,
  FINISH_COMPANY,
  FINISH_CHART,
  THROW_ERROR,
  RESET_STATUS
} from './types';

/**
 * "Start Loading" action creator, used to control the rendering of the Loading
 * spinner in the content view when a new request is made.
 * @return {Object} - "Start Loading" action
 */
export const startLoading = () => ({ type: START_LOADING });

/**
 * "Quote Loading Finish" action creator, informs the Status reducer that quote
 * data has finished loading and is available.
 * @return {Object} - "Quote Loading Finish" action
 */
export const finishQuote = () => ({ type: FINISH_QUOTE });

/**
 * "Company Loading Finish" action creator, informs the Status reducer that company
 * data has finished loading and is available.
 * @return {Object} - "Company Loading Finish" action
 */
export const finishCompany = () => ({ type: FINISH_COMPANY });

/**
 * "Chart Loading Finish" action creator, informs the Status reducer that chart
 * data has finished loading and is available
 * @return {Object} - "Chart Loading Finish" action
 */
export const finishChart = () => ({ type: FINISH_CHART });

/**
 * "Throw Error" action creator
 * @param {string} payload - The error message to be displayed
 * @return {Object} - "Throw Error" action
 */
export const throwError = payload => ({ type: THROW_ERROR, payload });

/**
 * "Reset Status" action creator
 * @return {Object} - "Reset Status" action
 */
export const resetStatus = () => ({ type: RESET_STATUS });
