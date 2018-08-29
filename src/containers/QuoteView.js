import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  Grid,
  Row,
  Column,
  Title
} from '../components';

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
  latestPrice: PropTypes.number.isRequired,
};

const mapStateToProps = state => ({
  ...state.quote
});

export default connect(mapStateToProps)(QuoteView);
