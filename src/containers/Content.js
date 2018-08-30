import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import _ from 'lodash';
import CompanyView from './CompanyView';
import QuoteView from './QuoteView';
import ChartView from './ChartView';
import { Card, Row, Spinner } from '../components';

const homeMessage = "Use the search input to find stock information about a company by entering it's symbol";

const Content = (props) => {
  const {
    initial,
    loaded,
    error
  } = props;

  if (initial) {
    return (
      <Row justifyContent="center">
        <Card>{homeMessage}</Card>
      </Row>
    );
  }
  if (error.length > 0) {
    return (
      <Row justifyContent="center">
        <Card error>{error}</Card>
      </Row>
    );
  }
  if (_.every(loaded)) {
    return (
      <div>
        <QuoteView />
        <ChartView />
        <CompanyView />
      </div>
    );
  }
  return (
    <Row justifyContent="center">
      <Spinner />
    </Row>
  );
};

Content.propTypes = {
  initial: PropTypes.bool.isRequired,
  loaded: PropTypes.object.isRequired,
  error: PropTypes.string.isRequired
};

const mapStateToProps = state => ({
  ...state.status
});

export default connect(mapStateToProps)(Content);
