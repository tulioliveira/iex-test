import { combineReducers } from 'redux';
import CompanyReducer from './CompanyReducer';
import QuoteReducer from './QuoteReducer';
import ChartReducer from './ChartReducer';

export default combineReducers({
  company: CompanyReducer,
  quote: QuoteReducer,
  chart: ChartReducer
});
