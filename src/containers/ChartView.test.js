import React from 'react';
import { render } from 'enzyme';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import ChartView from './ChartView';

const mockStore = configureMockStore([thunk]);

describe('ChartView Container Testing', () => {
  const env = { store: null };
  beforeEach(() => {
    env.store = mockStore({
      company: {
        symbol: '',
      },
      chart: {
        data: [],
        selectedRange: ''
      },
    });
  });

  it('renders without crashing', () => {
    const { store } = env;
    render(<ChartView store={store} />);
  });
});
