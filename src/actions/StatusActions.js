import {
  START_LOADING,
  FINISH_QUOTE,
  FINISH_COMPANY,
  FINISH_CHART,
  THROW_ERROR,
  RESET_STATUS
} from './types';

export const startLoading = () => ({ type: START_LOADING });

export const finishQuote = () => ({ type: FINISH_QUOTE });

export const finishCompany = () => ({ type: FINISH_COMPANY });

export const finishChart = () => ({ type: FINISH_CHART });

export const throwError = payload => ({ type: THROW_ERROR, payload });

export const resetStatus = () => ({ type: RESET_STATUS });
