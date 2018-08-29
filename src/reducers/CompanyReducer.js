import { LOAD_COMPANY, RESET_COMPANY } from '../actions/types';

const INITIAL_STATE = {
  symbol: '',
  companyName: '',
  exchange: '',
  industry: '',
  website: '',
  description: '',
  CEO: '',
  issueType: '',
  sector: '',
  tags: []
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case LOAD_COMPANY:
      return { ...action.payload };
    case RESET_COMPANY:
      return { ...INITIAL_STATE };
    default:
      return state;
  }
};
