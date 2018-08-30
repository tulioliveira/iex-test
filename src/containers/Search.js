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

const SearchIcon = styled(FiSearch)`
  position: absolute;
  top: 0.5rem;
  right: 2rem;
  margin-left: 0.5rem;
  font-size: 1rem;
  color: ${colors.secondary};
  cursor: pointer;
`;

const Form = styled.form`
  position: relative;
  margin: 0.5rem 0rem 0.5rem;
  min-width: 300px;
`;

class Search extends Component {
  state = { symbol: '' }

  static propTypes = {
    searchSymbol: PropTypes.func.isRequired
  }

  onSearchChange = (event) => {
    this.setState({ symbol: event.target.value });
  }

  onFormSubmit = (event) => {
    this.onSearch();
    event.preventDefault();
  }

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
      dispatch(loadChart(symbol, 'ytd'));
    }
    else {
      dispatch(resetStatus());
    }
  }
});

export default connect(null, mapDispatchToProps)(Search);
