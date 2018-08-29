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
