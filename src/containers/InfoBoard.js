import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const log = (...args) => {
  args.forEach((item) => {
    console.log(item);
  });
};

const InfoBoard = ({ company, quote }) => (
  <button type="button" onClick={() => log(company, quote)}>
    Click to log company & quote
  </button>
);

InfoBoard.propTypes = {
  company: PropTypes.object.isRequired,
  quote: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  company: state.company,
  quote: state.quote
});

export default connect(mapStateToProps)(InfoBoard);
