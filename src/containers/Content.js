import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import _ from 'lodash';
import CompanyView from './CompanyView';
import QuoteView from './QuoteView';
import ChartView from './ChartView';
import { Row } from '../components';

const Content = (props) => {
  const {
    initial,
    loaded,
    error
  } = props;

  if (initial) {
    return (
      <Row justifyContent="center">
        Estado Inicial
      </Row>
    );
  }
  if (error.length > 0) {
    return (
      <Row justifyContent="center">
        {error}
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
      Carregando
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
