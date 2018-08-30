import {
  START_LOADING,
  FINISH_QUOTE,
  FINISH_COMPANY,
  FINISH_CHART,
  THROW_ERROR,
  RESET_STATUS
} from '../actions/types';

const INITIAL_STATE = {
  initial: true,
  loaded: {
    quote: false,
    company: false,
    chart: false
  },
  error: ''
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case START_LOADING:
      return {
        initial: false,
        loaded: {
          quote: false,
          company: false,
          chart: false
        },
        error: ''
      };
    case FINISH_QUOTE:
      return {
        ...state,
        loaded: {
          ...state.loaded,
          quote: true
        }
      };
    case FINISH_COMPANY:
      return {
        ...state,
        loaded: {
          ...state.loaded,
          company: true
        }
      };
    case FINISH_CHART:
      return {
        ...state,
        loaded: {
          ...state.loaded,
          chart: true
        }
      };
    case THROW_ERROR:
      return {
        ...state,
        error: action.payload
      };
    case RESET_STATUS:
      return { ...INITIAL_STATE };
    default:
      return state;
  }
};
