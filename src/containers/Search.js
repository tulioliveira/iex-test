import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { FiSearch } from 'react-icons/fi';
import { loadCompany } from '../actions/CompanyActions';
import TextInput from '../components/TextInput';
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
  static propTypes = {
    searchSymbol: PropTypes.func.isRequired
  }

  constructor(props) {
    super(props);

    this.state = { symbol: '' };
  }

  handleChange = (event) => {
    this.setState({ symbol: event.target.value });
  }

  onFormSubmit = (event) => {
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
          onChange={this.handleChange}
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
  }
});

export default connect(null, mapDispatchToProps)(Search);
