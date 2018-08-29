import { LOAD_QUOTE, RESET_QUOTE } from '../actions/types';

const INITIAL_STATE = {
  latestPrice: null
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case LOAD_QUOTE:
      return { ...action.payload };
    case RESET_QUOTE:
      return { ...INITIAL_STATE };
    default:
      return state;
  }
};
