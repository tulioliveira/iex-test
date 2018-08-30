import React from 'react';
import { render, mount } from 'enzyme';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import QuoteView from './QuoteView';

const mockStore = configureMockStore([thunk]);

describe('QuoteView Container Testing', () => {
  const env = { store: null };
  beforeEach(() => {
    env.store = mockStore({
      quote: {
        latestPrice: 175.3
      },
    });
  });

  it('renders without crashing', () => {
    const { store } = env;
    render(<QuoteView store={store} />);
  });

  it('Should have quote value equal to 175.3', () => {
    const { store } = env;
    const wrapper = mount(<QuoteView store={store} />);

    expect(wrapper.find('Title').text()).toBe('175.3');
  });
});
