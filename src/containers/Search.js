import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { FiSearch } from 'react-icons/fi';
import { loadCompany, loadQuote } from '../actions';
import { TextInput } from '../components';
import { colors } from '../providers/styles';

const SearchIcon = styled(FiSearch)`
  position: absolute;
  top: 1.5rem;
  right: 2rem;
  margin-left: 0.5rem;
  font-size: 1rem;
  color: ${colors.secondary};
  cursor: pointer;
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
      <form onSubmit={this.onFormSubmit}>
        <TextInput
          value={symbol}
          onChange={this.onSearchChange}
          placeholder="Search"
          hasRightIcon
          fluid
        />
        <SearchIcon onClick={this.onSearch} />
      </form>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  searchSymbol: (symbol) => {
    dispatch(loadCompany(symbol));
    dispatch(loadQuote(symbol));
  }
});

export default connect(null, mapDispatchToProps)(Search);
