import { combineReducers } from 'redux';
import CompanyReducer from './CompanyReducer';
import QuoteReducer from './QuoteReducer';

export default combineReducers({
  company: CompanyReducer,
  quote: QuoteReducer
});
