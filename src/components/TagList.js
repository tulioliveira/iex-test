import React from 'react';
import PropTypes from 'prop-types';
import Tag from './Tag';

/**
 * TagList UI Component, used for rendering data array as tags
 */
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
  /**
   * Base iterator key for rendering array using the "map" function
   */
  iteratorKey: PropTypes.string.isRequired,
  /**
   * Data to be displayed
   */
  data: PropTypes.array.isRequired
};

export default TagList;
