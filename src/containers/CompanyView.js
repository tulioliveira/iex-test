import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  Grid,
  Column,
  Row,
  Link,
  Paragraph,
  TagList,
  Text,
  Title
} from '../components';

/**
 * Company container, responsible for rendering the company data
 */
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
      <Row alignItems="flex-end">
        <Column minWidth="350px">
          <Title inline>
            {companyName}
            <Text>{` (${symbol})`}</Text>
          </Title>
          <TagList iteratorKey="company" data={tags} />
          <Link href={website} text={website} openNewTab />
          <Paragraph textAlign="justify">{description}</Paragraph>
        </Column>
        <Column minWidth="360px">
          <Row>
            <Column>
              <Text letterSpacing="0.2rem" margin="0 0 0.5rem">EXCHANGE</Text>
              <Text bold>{exchange}</Text>
            </Column>
            <Column>
              <Text letterSpacing="0.2rem" margin="0 0 0.5rem">INDUSTRY</Text>
              <Text bold>{industry}</Text>
            </Column>
          </Row>
          <Row>
            <Column>
              <Text letterSpacing="0.2rem" margin="0 0 0.5rem">CEO</Text>
              <Text bold>{CEO}</Text>
            </Column>
            <Column>
              <Text letterSpacing="0.2rem" margin="0 0 0.5rem">ISSUE TYPE</Text>
              <Text bold>{issueType}</Text>
            </Column>
          </Row>
          <Row>
            <Column>
              <Text letterSpacing="0.2rem" margin="0 0 0.5rem">SECTOR</Text>
              <Text bold>{sector}</Text>
            </Column>
          </Row>
        </Column>
      </Row>
    </Grid>
  );
};

CompanyView.propTypes = {
  /**
   * Company symbol
   */
  symbol: PropTypes.string.isRequired,
  /**
   * Company name
   */
  companyName: PropTypes.string.isRequired,
  /**
   * Company exchange
   */
  exchange: PropTypes.string.isRequired,
  /**
   * Company industry
   */
  industry: PropTypes.string.isRequired,
  /**
   * Company website
   */
  website: PropTypes.string.isRequired,
  /**
   * Brief company description
   */
  description: PropTypes.string.isRequired,
  /**
   * Company CEO
   */
  CEO: PropTypes.string.isRequired,
  /**
   * Company Issue Type
   */
  issueType: PropTypes.string.isRequired,
  /**
   * Activity Sector
   */
  sector: PropTypes.string.isRequired,
  /**
   * Company associated tags
   */
  tags: PropTypes.array.isRequired
};

const mapStateToProps = state => ({
  ...state.company
});

export default connect(mapStateToProps)(CompanyView);
