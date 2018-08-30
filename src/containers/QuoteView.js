import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  Grid,
  Row,
  Column,
  Title
} from '../components';

/**
 * Quote container, responsible for rendering the latest price
 */
const QuoteView = (props) => {
  const {
    latestPrice
  } = props;

  return (
    <Grid>
      <Row>
        <Column>
          <Title size="3rem">{latestPrice}</Title>
        </Column>
      </Row>
    </Grid>
  );
};

QuoteView.propTypes = {
  /**
   * Stock quote's latest price
   */
  latestPrice: PropTypes.number.isRequired,
};

const mapStateToProps = state => ({
  ...state.quote
});

export default connect(mapStateToProps)(QuoteView);
