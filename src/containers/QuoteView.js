import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const QuoteView = (props) => {
  const {
    latestPrice
  } = props;

  return (
    <div>
      {latestPrice}
    </div>
  );
};

QuoteView.propTypes = {
  latestPrice: PropTypes.number.isRequired,
};

const mapStateToProps = state => ({
  ...state.quote
});

export default connect(mapStateToProps)(QuoteView);
