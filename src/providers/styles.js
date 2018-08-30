import _ from 'lodash';

/**
 * Theme colors
 */
const colors = {
  primary: '#343434', // Jet
  secondary: '#8884d8', // Deep Koamaru
  white: '#f7fbff', // Mint Cream
  gray: '#e4e5e6', // Shadow Blue
  darkGray: '#c3cdd7', // Shadow Blue - darker
  red: '#C14953', // Bittersweet Shimmer
  green: '#82D173' // Pastel Green
};

/**
 * Valid align-items property values
 */
const alignItemsProperties = [
  'stretch',
  'center',
  'flex-start',
  'flex-end',
  'baseline',
  'initial',
  'inherit'
];

/**
 * Valid justify-content property values
 */
const justifyContentProperties = [
  'flex-start',
  'flex-end',
  'center',
  'space-between',
  'space-around',
  'initial',
  'inherit'
];

/**
 * Valid text-align property values
 */
const textAlignProperties = [
  'left',
  'right',
  'center',
  'justify',
  'initial',
  'inherit'
];

/**
 * Check if align-item property value is valid
 * @param {string} property
 * @return {boolean}
 */
const isAlignProperty = property => (_.includes(alignItemsProperties, property));

/**
 * Check if justify-item property value is valid
 * @param {string} property
 * @return {boolean}
 */
const isJustifyProperty = property => (_.includes(justifyContentProperties, property));

/**
 * Check if text-align property value is valid
 * @param {string} property
 * @return {boolean}
 */
const isTextAlignProperty = property => (_.includes(textAlignProperties, property));

export {
  colors,
  isAlignProperty,
  isJustifyProperty,
  isTextAlignProperty
};
