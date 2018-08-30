import React from 'react';
import { mount } from 'enzyme';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import Search from './Search';
import {
  START_LOADING,
  LOAD_QUOTE,
  LOAD_COMPANY,
  LOAD_CHART
} from '../actions/types';

const mockStore = configureMockStore([thunk]);

describe('authenticate action', () => {
  const env = { store: null };
  beforeEach(() => {
    env.store = mockStore({
      quote: {
        latestPrice: 0
      },
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
      chart: {
        data: [],
        selectedRange: ''
      },
      status: {
        initial: true,
        loaded: {
          quote: false,
          company: false,
          chart: false
        },
        error: ''
      }
    });
  });

  it('Should find an input child', () => {
    const { store } = env;
    const wrapper = mount(<Search store={store} />);

    expect(wrapper.find('input').length).toBe(1);
  });

  it('Should find a SVG icon', () => {
    const { store } = env;
    const wrapper = mount(<Search store={store} />);

    expect(wrapper.find('svg').length).toBe(1);
  });

  it('Should change input value correctly', () => {
    const { store } = env;
    const wrapper = mount(<Search store={store} />);

    wrapper.find('input').simulate('change', { target: { value: 'aapl' } });

    expect(wrapper.find('input').prop('value')).toBe('aapl');
  });

  it('Should send actions correctly', () => {
    const { store } = env;
    const wrapper = mount(<Search store={store} />);

    wrapper.find('input').simulate('change', { target: { value: 'aapl' } });
    wrapper.simulate('submit');
    const actions = store.getActions();
    const expectedPayloads = [
      { type: START_LOADING },
      { type: LOAD_QUOTE },
      { type: LOAD_COMPANY },
      { type: LOAD_CHART },
    ];
    setTimeout(() => {
      expect(actions).toEqual(expectedPayloads);
    }, 1000);
  });
});
