import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import _ from 'lodash';
import CompanyView from './CompanyView';
import QuoteView from './QuoteView';
import ChartView from './ChartView';
import { Card, Row, Spinner } from '../components';

/**
 * Initial message to be displayed before any data is retrieved
 */
const homeMessage = "Use the search input to find stock information about a company by entering it's symbol";

/**
 * Content container, responsible for rendering the content based on the current app status:
 * initial message, error alert, retrieved data and loading activity indicator.
 */
const Content = (props) => {
  const {
    initial,
    loaded,
    error
  } = props;

  /**
   * Initial
   */
  if (initial) {
    return (
      <Row justifyContent="center">
        <Card>{homeMessage}</Card>
      </Row>
    );
  }
  /**
   * Error
   */
  if (error.length > 0) {
    return (
      <Row justifyContent="center">
        <Card error>{error}</Card>
      </Row>
    );
  }
  /**
   * Render data
   */
  if (_.every(loaded)) {
    return (
      <div>
        <QuoteView />
        <ChartView />
        <CompanyView />
      </div>
    );
  }
  /**
   * Loading
   */
  return (
    <Row justifyContent="center">
      <Spinner />
    </Row>
  );
};

Content.propTypes = {
  /**
   * True if the app is in it's initial state
   */
  initial: PropTypes.bool.isRequired,
  /**
   * Has properties { quote, company, chart } to watch if data has been received
   */
  loaded: PropTypes.object.isRequired,
  /**
   * Error message displayed if an error has been thrown
   */
  error: PropTypes.string.isRequired
};

const mapStateToProps = state => ({
  ...state.status
});

export default connect(mapStateToProps)(Content);
