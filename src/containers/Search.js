import React, { Component } from 'react';
import styled from 'styled-components';
import { FiSearch } from 'react-icons/fi';
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
  onFormSubmit = (event) => {
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.onFormSubmit}>
        <TextInput placeholder="Search" hasRightIcon fluid />
        <SearchIcon />
      </form>
    );
  }
}

export default Search;
