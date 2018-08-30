import _ from 'lodash';

const colors = {
  primary: '#343434', // Jet
  secondary: '#8884d8', // Deep Koamaru
  white: '#f7fbff', // Mint Cream
  gray: '#e4e5e6', // Shadow Blue
  darkGray: '#c3cdd7', // Shadow Blue
  red: '#C14953', // Bittersweet Shimmer
  green: '#82D173' // Pastel Green
};

const alignItemsProperties = [
  'stretch',
  'center',
  'flex-start',
  'flex-end',
  'baseline',
  'initial',
  'inherit'
];

const justifyContentProperties = [
  'flex-start',
  'flex-end',
  'center',
  'space-between',
  'space-around',
  'initial',
  'inherit'
];

const textAlignProperties = [
  'left',
  'right',
  'center',
  'justify',
  'initial',
  'inherit'
];

const isAlignProperty = property => (_.includes(alignItemsProperties, property));

const isJustifyProperty = property => (_.includes(justifyContentProperties, property));

const isTextAlignProperty = property => (_.includes(textAlignProperties, property));

export {
  colors,
  isAlignProperty,
  isJustifyProperty,
  isTextAlignProperty
};
