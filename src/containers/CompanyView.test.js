import React from 'react';
import { render } from 'enzyme';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import CompanyView from './CompanyView';

const mockStore = configureMockStore([thunk]);

describe('CompanyView Container Testing', () => {
  const env = { store: null };
  beforeEach(() => {
    env.store = mockStore({
      company: {
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
      },
    });
  });

  it('renders without crashing', () => {
    const { store } = env;
    render(<CompanyView store={store} />);
  });
});
