import React from 'react';
import PropTypes from 'prop-types';
import Tag from './Tag';

const TagList = ({ iteratorKey, data }) => (
  <div>
    {data.map((tag, index) => (
      <Tag key={`${iteratorKey}Tag${index}`}>
        {tag}
      </Tag>
    ))}
  </div>
);

TagList.propTypes = {
  iteratorKey: PropTypes.string.isRequired,
  data: PropTypes.array.isRequired
};

export default TagList;
