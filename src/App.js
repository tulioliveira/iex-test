import React from 'react';
import Search from './containers/Search';
import CompanyView from './containers/CompanyView';
import QuoteView from './containers/QuoteView';
import ChartView from './containers/ChartView';

const App = () => (
  <div>
    <Search />
    <QuoteView />
    <ChartView />
    <CompanyView />
  </div>
);

export default App;
