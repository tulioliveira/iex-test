import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  Grid,
  Column,
  Row,
  TagList
} from '../components';

const CompanyView = (props) => {
  const {
    symbol,
    companyName,
    exchange,
    industry,
    website,
    description,
    CEO,
    issueType,
    sector,
    tags
  } = props;

  return (
    <Grid>
      <Row>
        <Column>
          {symbol}
        </Column>
        <Column>
          <span>{companyName}</span>
          <TagList iteratorKey="Company" data={tags} />
          <span>{description}</span>
        </Column>
        <Column>
          {exchange}
        </Column>
        <Column>
          {industry}
        </Column>
        <Column>
          {website}
        </Column>
        <Column>
          {CEO}
        </Column>
        <Column>
          {issueType}
        </Column>
        <Column>
          {sector}
        </Column>
      </Row>
    </Grid>
  );
};

CompanyView.propTypes = {
  symbol: PropTypes.string.isRequired,
  companyName: PropTypes.string.isRequired,
  exchange: PropTypes.string.isRequired,
  industry: PropTypes.string.isRequired,
  website: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  CEO: PropTypes.string.isRequired,
  issueType: PropTypes.string.isRequired,
  sector: PropTypes.string.isRequired,
  tags: PropTypes.array.isRequired
};

const mapStateToProps = state => ({
  ...state.company
});

export default connect(mapStateToProps)(CompanyView);
