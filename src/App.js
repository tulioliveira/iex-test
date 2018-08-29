import React from 'react';
import Search from './containers/Search';
import CompanyView from './containers/CompanyView';
import QuoteView from './containers/QuoteView';

const App = () => (
  <div>
    <Search />
    <QuoteView />
    <CompanyView />
  </div>
);

export default App;
