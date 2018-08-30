import React from 'react';
import { mount, render } from 'enzyme';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import Content from './Content';

const mockStore = configureMockStore([thunk]);

describe('Content Container Testing', () => {
  it('renders without crashing', () => {
    const store = mockStore({
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
    render(<Content store={store} />);
  });

  it('Should find a card without error prop', () => {
    const store = mockStore({
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
    const wrapper = mount(<Content store={store} />);

    expect(wrapper.find('Card').length).toBe(1);
    expect(wrapper.find('Card').prop('error')).toBe(undefined);
  });

  it('Should find a spinner', () => {
    const store = mockStore({
      status: {
        initial: false,
        loaded: {
          quote: false,
          company: true,
          chart: false
        },
        error: ''
      }
    });
    const wrapper = mount(<Content store={store} />);

    expect(wrapper.find('Spinner').length).toBe(1);
  });

  it('Should find error message', () => {
    const store = mockStore({
      status: {
        initial: false,
        loaded: {
          quote: true,
          company: true,
          chart: false
        },
        error: 'Could\'nt find symbol'
      }
    });
    const wrapper = mount(<Content store={store} />);

    expect(wrapper.find('Card').length).toBe(1);
    expect(wrapper.find('Card').prop('error')).toBe(true);
  });

  it('Should find QuoteView, CompanyView and ChartView', () => {
    const store = mockStore({
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
        initial: false,
        loaded: {
          quote: true,
          company: true,
          chart: true
        },
        error: ''
      }
    });
    const wrapper = mount(<Provider store={store}><Content /></Provider>);

    expect(wrapper.find('QuoteView').length).toBe(1);
    expect(wrapper.find('CompanyView').length).toBe(1);
    expect(wrapper.find('ChartView').length).toBe(1);
  });
});
