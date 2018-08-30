import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { FiSearch } from 'react-icons/fi';
import {
  startLoading,
  loadCompany,
  loadQuote,
  loadChart,
  resetStatus
} from '../actions';
import { TextInput } from '../components';
import { colors } from '../providers/styles';

/**
 * Styled Search Icon
 */
const SearchIcon = styled(FiSearch)`
  position: absolute;
  top: 0.5rem;
  right: 2rem;
  margin-left: 0.5rem;
  font-size: 1rem;
  color: ${colors.secondary};
  cursor: pointer;
`;

/**
 * Styled Form
 */
const Form = styled.form`
  position: relative;
  margin: 0.5rem 0rem 0.5rem;
  min-width: 300px;
`;

/**
 * Search bar used to query for companies by their symbol
 */
class Search extends Component {
  state = { symbol: '' }

  static propTypes = {
    /**
     * Dispatch a symbol to Redux load actions
     * @param {string} symbol - Company Symbol
     */
    searchSymbol: PropTypes.func.isRequired
  }

  /**
   * Handle search input value change, updating the symbol state
   * @param {object} event - Input value change event
   */
  onSearchChange = (event) => {
    this.setState({ symbol: event.target.value });
  }

  /**
   * Prevent the form default action after submitting, instead calling the onSearch() function
   * @param {object} event - Form submit event
   */
  onFormSubmit = (event) => {
    this.onSearch();
    event.preventDefault();
  }

  /**
   * Dispatch the search symbol to the Redux load actions, retrieving data from the IEX API
   */
  onSearch = () => {
    const { searchSymbol } = this.props;
    const { symbol } = this.state;

    searchSymbol(symbol);
  }

  render() {
    const { symbol } = this.state;

    return (
      <Form onSubmit={this.onFormSubmit}>
        <TextInput
          value={symbol}
          onChange={this.onSearchChange}
          placeholder="Search"
          hasRightIcon
          fluid
        />
        <SearchIcon onClick={this.onSearch} />
      </Form>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  searchSymbol: (symbol) => {
    if (symbol.length > 0) {
      dispatch(startLoading());
      dispatch(loadCompany(symbol));
      dispatch(loadQuote(symbol));
      dispatch(loadChart(symbol, '1d'));
    }
    else {
      dispatch(resetStatus());
    }
  }
});

export default connect(null, mapDispatchToProps)(Search);
