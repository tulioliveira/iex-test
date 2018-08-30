import { LOAD_CHART, RESET_CHART } from '../actions/types';

const INITIAL_STATE = {
  data: [],
  selectedRange: ''
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case LOAD_CHART:
      return { ...action.payload };
    case RESET_CHART:
      return { ...INITIAL_STATE };
    default:
      return state;
  }
};
