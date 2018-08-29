import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const InfoBoard = ({ company }) => (
  <button type="button" onClick={() => console.log(company)}>
    Click to log company
  </button>
);

InfoBoard.propTypes = {
  company: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  company: state.company
});

export default connect(mapStateToProps)(InfoBoard);
