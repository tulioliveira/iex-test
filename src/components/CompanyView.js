import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';

const CompanyView = ({ company }) => (
  <div>
    <ul>
      {_.map(company, (item, key) => (
        <li key={key}>{`${key}: ${item}`}</li>
      ))}
    </ul>
  </div>
);

CompanyView.propTypes = {
  company: PropTypes.object.isRequired
};

export default CompanyView;
