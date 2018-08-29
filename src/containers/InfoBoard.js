import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import CompanyView from './CompanyView';

const log = (...args) => {
  args.forEach((item) => {
    console.log(item);
  });
};

const InfoBoard = ({ quote }) => (
  <div>
    <CompanyView />
    <button type="button" onClick={() => log(quote)}>
      Click to log quote
    </button>
  </div>
);

InfoBoard.propTypes = {
  quote: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  quote: state.quote
});

export default connect(mapStateToProps)(InfoBoard);
